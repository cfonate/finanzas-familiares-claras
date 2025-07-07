
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { saveSubmission, sendEmails } from '@/services/submissionService';
import { QuestionnaireResult, Answer } from '@/types/questionTypes';

const TestFormSubmission = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState<string>('');

  // Datos mock para testing
  const mockAnswers: Answer[] = [
    { questionId: 1, sectionId: 1, selectedOption: "Tengo un presupuesto detallado", points: 3 },
    { questionId: 2, sectionId: 1, selectedOption: "Ahorro regularmente", points: 3 },
    { questionId: 3, sectionId: 2, selectedOption: "Tengo un fondo de emergencia", points: 3 },
    { questionId: 4, sectionId: 2, selectedOption: "Estoy preparado para gastos inesperados", points: 3 },
    { questionId: 5, sectionId: 3, selectedOption: "Tengo múltiples fuentes de ingresos", points: 3 }
  ];

  const mockResults: QuestionnaireResult = {
    totalScore: 75,
    maxPossibleScore: 100,
    percentage: 75,
    sectionScores: [
      { sectionId: 1, score: 15, total: 20, percentage: 75 },
      { sectionId: 2, score: 15, total: 20, percentage: 75 },
      { sectionId: 3, score: 15, total: 20, percentage: 75 }
    ],
    category: "Buena",
    recommendations: [
      "Mantén tu buen nivel de planificación financiera",
      "Considera diversificar más tus inversiones",
      "Revisa periódicamente tu estrategia de ahorro"
    ]
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!firstName || !lastName || !email) {
      setResult('Por favor, completa todos los campos');
      return;
    }

    setIsLoading(true);
    setResult('');

    try {
      const submission = {
        firstName,
        lastName,
        email,
        answers: mockAnswers,
        results: mockResults
      };

      console.log('=== INICIANDO TEST DE ENVÍO COMPLETO ===');
      console.log('Datos de prueba:', submission);

      // Paso 1: Guardar en base de datos
      const saveResult = await saveSubmission(submission);
      
      if (!saveResult.success) {
        throw new Error(`Error al guardar: ${saveResult.error}`);
      }

      console.log('✅ Guardado en BD exitoso');

      // Paso 2: Enviar emails
      const emailResult = await sendEmails(submission);
      
      if (!emailResult.success) {
        throw new Error(`Error al enviar emails: ${emailResult.error}`);
      }

      console.log('✅ Envío de emails exitoso');

      setResult('✅ Test completado exitosamente! Se guardó en la base de datos y se enviaron los emails.');
      
      // Limpiar formulario
      setFirstName('');
      setLastName('');
      setEmail('');

    } catch (error) {
      console.error('❌ Error en test:', error);
      setResult(`❌ Error: ${error.message}`);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Card className="max-w-md mx-auto">
      <CardHeader>
        <CardTitle>Test de Envío de Formulario</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Label htmlFor="firstName">Nombre</Label>
            <Input
              id="firstName"
              type="text"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              placeholder="Ingresa tu nombre"
            />
          </div>

          <div>
            <Label htmlFor="lastName">Apellido</Label>
            <Input
              id="lastName"
              type="text"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              placeholder="Ingresa tu apellido"
            />
          </div>

          <div>
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="tu@email.com"
            />
          </div>

          <Button 
            type="submit" 
            className="w-full"
            disabled={isLoading}
          >
            {isLoading ? 'Enviando...' : 'Probar Envío Completo'}
          </Button>

          {result && (
            <Alert className={result.includes('✅') ? 'border-green-500' : 'border-red-500'}>
              <AlertDescription>{result}</AlertDescription>
            </Alert>
          )}
        </form>

        <div className="mt-6 p-4 bg-gray-50 rounded-lg">
          <h4 className="font-semibold mb-2">Datos Mock que se enviarán:</h4>
          <ul className="text-sm text-gray-600 space-y-1">
            <li>• {mockAnswers.length} respuestas de prueba</li>
            <li>• Puntuación: {mockResults.totalScore}/{mockResults.maxPossibleScore} ({mockResults.percentage}%)</li>
            <li>• Categoría: {mockResults.category}</li>
            <li>• {mockResults.recommendations.length} recomendaciones</li>
          </ul>
        </div>
      </CardContent>
    </Card>
  );
};

export default TestFormSubmission;

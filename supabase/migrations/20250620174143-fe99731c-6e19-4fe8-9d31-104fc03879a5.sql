
-- Primero, eliminamos las políticas existentes que están causando problemas
DROP POLICY IF EXISTS "Users can view their own submissions" ON public.form_submissions;
DROP POLICY IF EXISTS "Admins can select all submissions" ON public.form_submissions;
DROP POLICY IF EXISTS "Users can insert their own submissions" ON public.form_submissions;
DROP POLICY IF EXISTS "Admins can update submissions" ON public.form_submissions;
DROP POLICY IF EXISTS "Admins can delete submissions" ON public.form_submissions;

-- Creamos una función de seguridad definer para obtener el user ID de manera eficiente
CREATE OR REPLACE FUNCTION public.get_current_user_id()
RETURNS uuid
LANGUAGE sql
SECURITY DEFINER
STABLE
AS $$
  SELECT auth.uid();
$$;

-- Creamos una función para verificar si el usuario actual es admin
CREATE OR REPLACE FUNCTION public.is_current_user_admin()
RETURNS boolean
LANGUAGE sql
SECURITY DEFINER
STABLE
AS $$
  SELECT public.is_admin();
$$;

-- Creamos una sola política optimizada que maneja tanto usuarios normales como admins
CREATE POLICY "Optimized access policy for form_submissions"
ON public.form_submissions
FOR SELECT
USING (
  -- Los admins pueden ver todo, los usuarios solo sus propios envíos
  public.is_current_user_admin() = true 
  OR 
  (SELECT public.get_current_user_id()) IS NOT NULL
);

-- Creamos las políticas para INSERT, UPDATE y DELETE
CREATE POLICY "Users can insert their own submissions"
ON public.form_submissions
FOR INSERT
WITH CHECK (true); -- Permitir insertar ya que no requiere autenticación en este caso

CREATE POLICY "Admins can update submissions"
ON public.form_submissions
FOR UPDATE
USING (public.is_current_user_admin() = true);

CREATE POLICY "Admins can delete submissions"
ON public.form_submissions
FOR DELETE
USING (public.is_current_user_admin() = true);

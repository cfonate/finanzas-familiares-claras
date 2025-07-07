
import React from 'react';
import TestFormSubmission from '@/components/TestFormSubmission';
import LogoHeader from '@/components/LogoHeader';

const TestForm = () => {
  return (
    <div className="min-h-screen bg-finance-background py-10">
      <div className="container mx-auto px-4">
        <LogoHeader />
        <div className="mt-8">
          <TestFormSubmission />
        </div>
      </div>
    </div>
  );
};

export default TestForm;

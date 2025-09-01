-- Fix security vulnerability: Remove public access to form_submissions table
-- Only admins should be able to view submissions since there's no user authentication system

-- Drop the existing insecure SELECT policy
DROP POLICY IF EXISTS "Optimized access policy for form_submissions" ON public.form_submissions;

-- Create a new secure SELECT policy that only allows admin access
CREATE POLICY "Only admins can view submissions" 
ON public.form_submissions 
FOR SELECT 
USING (public.is_current_user_admin() = true);

-- Keep the INSERT policy as is (public form submissions allowed)
-- The existing "Users can insert their own submissions" policy with check(true) is fine for a public form

-- Add a policy to allow users to view their own submission by email (optional, more secure approach)
-- This allows someone to retrieve their own submission if they provide their email
CREATE POLICY "Users can view own submission by email" 
ON public.form_submissions 
FOR SELECT 
USING (
  -- Only if they're authenticated AND the email matches
  auth.uid() IS NOT NULL 
  AND email = current_setting('request.jwt.claims', true)::json->>'email'
);

-- Add index on email for better performance when looking up submissions
CREATE INDEX IF NOT EXISTS idx_form_submissions_email ON public.form_submissions(email);
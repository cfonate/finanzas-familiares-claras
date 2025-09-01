-- Fix critical security vulnerability: Remove public access to email_queue table
-- This table contains sensitive customer data and should only be accessible to admins

-- Drop the insecure public SELECT policy
DROP POLICY IF EXISTS "Allow anyone to view email queue" ON public.email_queue;

-- Create a secure SELECT policy that only allows admin access
CREATE POLICY "Only admins can view email queue" 
ON public.email_queue 
FOR SELECT 
USING (public.is_current_user_admin() = true);

-- Add UPDATE policy for admins to manage email status
CREATE POLICY "Only admins can update email queue" 
ON public.email_queue 
FOR UPDATE 
USING (public.is_current_user_admin() = true);

-- Add DELETE policy for admins to clean up old emails
CREATE POLICY "Only admins can delete from email queue" 
ON public.email_queue 
FOR DELETE 
USING (public.is_current_user_admin() = true);

-- Keep the INSERT policy as is ("Allow anyone to insert into email queue")
-- This is necessary for the system to queue emails when forms are submitted
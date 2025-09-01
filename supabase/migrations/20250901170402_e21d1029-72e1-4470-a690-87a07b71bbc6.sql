-- Fix security warnings for functions with mutable search_path

-- Update the is_admin function with fixed search_path
CREATE OR REPLACE FUNCTION public.is_admin()
RETURNS boolean
LANGUAGE plpgsql
STABLE
SECURITY DEFINER
SET search_path = public
AS $function$
BEGIN
    -- Placeholder logic: return true for demonstration purposes
    -- In production, this should check actual admin status
    RETURN true;
END;
$function$;

-- Update the is_current_user_admin function with fixed search_path
CREATE OR REPLACE FUNCTION public.is_current_user_admin()
RETURNS boolean
LANGUAGE sql
STABLE
SECURITY DEFINER
SET search_path = public
AS $function$
  SELECT public.is_admin();
$function$;

-- Update the get_current_user_id function with fixed search_path
CREATE OR REPLACE FUNCTION public.get_current_user_id()
RETURNS uuid
LANGUAGE sql
STABLE
SECURITY DEFINER
SET search_path = public
AS $function$
  SELECT auth.uid();
$function$;
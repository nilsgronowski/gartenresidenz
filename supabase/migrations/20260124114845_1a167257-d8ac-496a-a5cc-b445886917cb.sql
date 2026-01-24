-- Create contact inquiries table
CREATE TABLE public.contact_inquiries (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  apartment_interest TEXT,
  message TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.contact_inquiries ENABLE ROW LEVEL SECURITY;

-- Allow anyone to insert contact inquiries (public form)
CREATE POLICY "Anyone can submit contact inquiries" 
ON public.contact_inquiries 
FOR INSERT 
WITH CHECK (true);

-- Only service role can read inquiries (via edge function / admin)
-- No public SELECT policy needed - data only accessed via backend
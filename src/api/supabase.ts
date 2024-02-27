import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://pmqiepfqhncefftenwth.supabase.co';
const supabaseKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBtcWllcGZxaG5jZWZmdGVud3RoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDkwNjAwNzEsImV4cCI6MjAyNDYzNjA3MX0.AHC1LtyNsyjmKIgyf1wFha-UNBNkc4RwP9BQiorizBw';
export const supabase = createClient(supabaseUrl, supabaseKey);

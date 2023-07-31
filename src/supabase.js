import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://kwwruzeuckphgldfkelg.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imt3d3J1emV1Y2twaGdsZGZrZWxnIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTAyOTk3NTEsImV4cCI6MjAwNTg3NTc1MX0.oFj-WmKWMLe6lIS3E_q47OAmCZMxn6I7wEPQSDHajNo';

export const supabase = createClient(supabaseUrl, supabaseKey);

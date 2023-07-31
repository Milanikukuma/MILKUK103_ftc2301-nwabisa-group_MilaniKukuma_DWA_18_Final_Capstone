// Import necessary dependencies
import React from "react";
import { Auth } from '@supabase/auth-ui-react';
import { ThemeSupa } from '@supabase/auth-ui-shared';
import { createClient } from '@supabase/supabase-js'; // Make sure you import the createClient function from the correct package

// Create a Supabase client instance
const supabase = createClient(
  'https://kwwruzeuckphgldfkelg.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imt3d3J1emV1Y2twaGdsZGZrZWxnIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTAyOTk3NTEsImV4cCI6MjAwNTg3NTc1MX0.oFj-WmKWMLe6lIS3E_q47OAmCZMxn6I7wEPQSDHajNo'
);

// Create the About component
const SignIn= () => (
  // Display the authentication UI provided by Supabase
  <Auth
    supabaseClient={supabase}
    appearance={{ theme: ThemeSupa }}
  />
);

export default SignIn;

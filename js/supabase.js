// js/supabase.js
// Supabase client init (v2)

const SUPABASE_URL = "https://upwupequqgnwknewnyqg.supabase.co";
const SUPABASE_ANON_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVwd3VwZXF1cWdud2tuZXdueXFnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzA4ODY1MjQsImV4cCI6MjA4NjQ2MjUyNH0.kjObJNTF-uubQwZQp04G8tkgnQkTgbtveN-zZKATneA";

const supabaseClient = supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

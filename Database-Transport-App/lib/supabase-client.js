import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://swzykfywesgkomrzzbtz.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InN3enlrZnl3ZXNna29tcnp6YnR6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzM1NTAyNjgsImV4cCI6MjA0OTEyNjI2OH0.sbF8X6FI0jMVYqCkhuH6GTkXGfqW-4-jHg_0dIKx7T4'
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://thsqpnmvfkawaxyeitcv.supabase.co';
const supabaseAnonKey = 'sb_publishable_fi19DYThr4pYBhUjH5DQjg_a2DqjSke';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

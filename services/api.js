import axios from 'axios';

export const api  = axios.create({
    baseURL: 'https://vitfgmtchphrpjuabuxl.supabase.co/rest/v1',
    headers: {
        apikey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZpdGZnbXRjaHBocnBqdWFidXhsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mjc4MTk5NjksImV4cCI6MjA0MzM5NTk2OX0.purGgSithe7xO2Yo_57CBPPaDtJYcCz-4JyVQDQ--xc",
        authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZpdGZnbXRjaHBocnBqdWFidXhsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mjc4MTk5NjksImV4cCI6MjA0MzM5NTk2OX0.purGgSithe7xO2Yo_57CBPPaDtJYcCz-4JyVQDQ--xc"
    }
})
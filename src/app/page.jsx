import Link from 'next/link';
import { supabase } from '../lib/supabaseClient';



export default async function Home() {
  const {data} = await supabase.from('countries').select('*');
console.log(data);
   return (
    <div>
<ul>
        {data.map((country) => (
          <li key={country.id}>{country.id}&emsp;{country.name}</li>
        ))}
      </ul>
      <Link href={'/create'}>Create Page</Link>
    </div>
  )
}

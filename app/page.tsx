import { cookies } from 'next/headers'
import PageClient from '@/app/page-client'
import { Lang } from '@/types'

export default async function Page() {
  const cookieStore = await cookies()
  const savedLang = cookieStore.get('portfolio-lang')?.value
  const initialLang: Lang = savedLang === 'en' || savedLang === 'th' ? savedLang : 'th'

  return <PageClient initialLang={initialLang} />
}

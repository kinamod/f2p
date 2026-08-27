import { builder } from '@builder.io/sdk';
import { notFound } from 'next/navigation';
import MortgageBankerTemplate from '@/components/MortgageBankerTemplate';

builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY!);

interface BankerPageParams {
  params: Promise<{ slug: string[] }>;
}

function getSlugFromParams(slug: string[] | undefined) {
  return slug?.[slug.length - 1] || '';
}

async function getBankerContent(urlPath: string) {
  return builder
    .get('mortgage-banker', {
      userAttributes: { urlPath },
    })
    .promise();
}

export async function generateMetadata({ params }: BankerPageParams) {
  const { slug } = await params;
  const bankerSlug = getSlugFromParams(slug);
  const urlPath = `/bankers/${bankerSlug}`;
  const content = await getBankerContent(urlPath);

  if (!content) {
    return {};
  }

  const fullName: string = content.data?.fullName || '';
  const seoTitle: string =
    content.data?.seoTitle || (fullName ? `${fullName} | Mortgage Banker | Atlantic Bay` : 'Mortgage Banker | Atlantic Bay');
  const seoDescription: string | undefined = content.data?.seoDescription || undefined;

  return {
    title: seoTitle,
    description: seoDescription,
  };
}

export default async function MortgageBankerPage({ params }: BankerPageParams) {
  const { slug } = await params;
  const bankerSlug = getSlugFromParams(slug);
  const urlPath = `/bankers/${bankerSlug}`;
  const content = await getBankerContent(urlPath);

  if (!content) {
    notFound();
  }

  const data = content.data || {};
  const licensedStates: string[] = (data.licensedStates || [])
    .map((entry: { state?: string }) => entry?.state)
    .filter(Boolean);
  const specialisms: string[] = (data.specialisms || [])
    .map((entry: { specialism?: string }) => entry?.specialism)
    .filter(Boolean);

  return (
    <MortgageBankerTemplate
      fullName={data.fullName}
      headshot={data.headshot}
      jobTitle={data.jobTitle}
      city={data.city}
      state={data.state}
      licensedStates={licensedStates}
      specialisms={specialisms}
      phone={data.phone}
      email={data.email}
      nmlsNumber={data.nmlsNumber}
      applyNowUrl={data.applyNowUrl}
      hablaEspanol={data.hablaEspanol}
      testimonialQuote={data.testimonialQuote}
      testimonialAuthor={data.testimonialAuthor}
      bio={data.bio}
    />
  );
}

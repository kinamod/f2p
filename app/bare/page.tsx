'use client';
// We import the SDK from this package for compatibility with Server Components
import { builder } from '@builder.io/sdk';
import { RenderBuilderContent } from '@/components/builder';
import '@/builder-registry';

// Initialize Builder with your API Key
builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY!);

export default async function BarePage() {
  const MODELNAME = 'page';
  
  const content = await builder
    .get(MODELNAME, {
      userAttributes: {
        urlPath: '/bare',
      },
    })
    .toPromise();

  return <RenderBuilderContent content={content} model={MODELNAME} />;
}

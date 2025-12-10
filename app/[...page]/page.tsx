// We import the SDK from this package for compatibility with Server Components
import { builder } from '@builder.io/sdk';
import { RenderBuilderContent } from '@/components/builder';
import '@/builder-registry';

// Initialize Builder with your API Key
builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY!);

interface PageParams {
  params: Promise<{
    page: string[];
  }>;
}

export default async function Page({ params }: PageParams) {
  const MODELNAME = 'page';
  const path = (await params)?.page?.join('/') || '';
  const content = await builder
    .get(MODELNAME, {
      userAttributes: {
        urlPath: '/' + path,
      },
    })
    .toPromise();
  return <RenderBuilderContent content={content} model={MODELNAME} />;
}

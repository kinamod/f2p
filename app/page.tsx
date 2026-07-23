'use client';

import { builder } from '@builder.io/react';
import { RenderBuilderContent } from '@/components/builder';
import '@/builder-registry';
import { useEffect, useState } from 'react';

builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY!);

export default function Page() {
  const [builderContent, setBuilderContent] = useState(null);

  useEffect(() => {
    builder
      .get('page', {
        userAttributes: {
          urlPath: '/',
        },
      })
      .promise()
      .then(setBuilderContent);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {builderContent && <RenderBuilderContent content={builderContent} model="page" />}
    </div>
  );
}

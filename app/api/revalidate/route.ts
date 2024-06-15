import { revalidatePath } from 'next/cache';
import { type NextRequest, NextResponse } from 'next/server';
import { parseBody } from 'next-sanity/webhook';

type Body = {
  _type: string;
  slug?: string | undefined;
};

export async function POST(req: NextRequest) {
  try {
    const { body } = await parseBody<Body>(req);

    if (!body?._type) {
      return new Response('Bad Request', { status: 400 });
    }

    const paths: Record<string, string[]> = {
      pageHome: ['/'],
      aboutPage: ['/about'],
      project: ['/', '/projects'],
    };

    paths[body._type] = paths[body._type] || [];
    for (const path of paths[body._type]) {
      revalidatePath(path);
    }

    if (body._type === 'project') {
      revalidatePath(`/projects/${body.slug}`);
    }

    return NextResponse.json({
      status: 200,
      revalidated: true,
      now: Date.now(),
      body,
    });
  } catch (error: any) {
    console.error(error);
    return new Response(error.message, { status: 500 });
  }
}

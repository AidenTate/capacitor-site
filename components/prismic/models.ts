import { Document } from 'prismic-javascript/types/documents';
import ApiSearchResponse from 'prismic-javascript/types/ApiSearchResponse';

export interface PrismicDocsResponse {
  docs: Document[];
  _prismic: ApiSearchResponse;
}

/**
 * Shared fields for resources
 */
export interface Resource {
  doc?: any;
  title: string;
  uid: string;
  id: string;
  description: string;
  publishDate: string | null;
  updatedDate: string | null;
  metaImage: string;
  heroImage: {
    'dimensions': { height: number; width: number };
    'alt': string | null;
    'copyright': string;
    'url': string;
    '1x'?: any; //TODO: make this actually match prismic
    '2x'?: any; //TODO: make this actually match prismic
  };
  type: ResourceType;
  authors: ResourceAuthor[];
  tags: string[];
  metaTags: { tag: string; rating: number }[];
  source: ResourceSource;
}

export interface PrismicResource extends Resource {
  source: ResourceSource.Prismic;
  doc: PrismicDoc;
}

export interface ResourceAuthor {
  name: string;
  title: string;
  link: string;
  avatar: string;
}

export interface ResourceLink {
  id: string;
  isBroken: boolean;
  lang: string;
  link_type: string;
  slug: string;
  tags: string[];
  type: ResourceType;
  uid: string;
}

export enum ResourceType {
  Article = 'Article',
  Blog = 'Blog',
  Book = 'Book',
  CaseStudy = 'Case Study',
  CustomerInterview = 'Customer Interview',
  Course = 'Course',
  Doc = 'Doc',
  Ebook = 'eBook',
  Guide = 'Guide',
  Learning = 'Learning',
  Podcast = 'Podcast',
  Tutorial = 'Tutorial',
  Video = 'Video',
  Whitepaper = 'Whitepaper',
  Webinar = 'Webinar',
}

// Prismic resources
export interface Article extends PrismicResource {
  type: ResourceType.Article;
}
export interface Book extends PrismicResource {
  type: ResourceType.Book;
}
export interface CaseStudy extends PrismicResource {
  type: ResourceType.CaseStudy;
}
export interface Course extends PrismicResource {
  type: ResourceType.Course;
}
export interface Ebook extends PrismicResource {
  type: ResourceType.Ebook;
}
export interface Guide extends PrismicResource {
  type: ResourceType.Guide;
}
export interface Tutorial extends PrismicResource {
  type: ResourceType.Tutorial;
}
export interface Video extends PrismicResource {
  type: ResourceType.Video;
}
export interface Whitepaper extends PrismicResource {
  type: ResourceType.Whitepaper;
}
export interface Webinar extends PrismicResource {
  type: ResourceType.Webinar;
  when: string;
}
export interface Doc extends PrismicResource {
  type: ResourceType.Doc;
}
export interface Blog extends PrismicResource {
  type: ResourceType.Blog;
}

export enum ResourceSource {
  Prismic = 'prismic',
}

/**
 * Prismic Types
 */
export interface PrismicDoc extends Document {
  data: any;
}

/**
 * Site specifc models
 */

export interface SiteTheme {
  transparentNav?: boolean;
}

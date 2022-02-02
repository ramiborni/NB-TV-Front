export default interface Article {
    id:              number;
    date:            string;
    slug:            string;
    status:          string;
    type:            string;
    link:            string;
    title:           GUID;
    content:         Content;
    excerpt:         Content;
    author:          number;
    featured_media:  number;
    meta:            any[];
    categories:      number[];
    tags:            number[];
    yoast_head:      string;
    yoast_head_json: YoastHeadJSON;
}

export interface Links {
    self:                   About[];
    collection:             About[];
    about:                  About[];
    replies:                AuthorElement[];
    "version-history":      VersionHistory[];
    "wp:featuredmedia"?:    AuthorElement[];
    "wp:attachment":        About[];
    "wp:term":              WpTerm[];
    curies:                 Cury[];
    "predecessor-version"?: PredecessorVersion[];
    author?:                AuthorElement[];
}

export interface About {
    href: string;
}

export interface AuthorElement {
    embeddable: boolean;
    href:       string;
}

export interface Cury {
    name:      string;
    href:      string;
    templated: boolean;
}

export interface PredecessorVersion {
    id:   number;
    href: string;
}

export interface VersionHistory {
    count: number;
    href:  string;
}

export interface WpTerm {
    taxonomy:   Taxonomy;
    embeddable: boolean;
    href:       string;
}

export enum Taxonomy {
    Category = "category",
    PostTag = "post_tag",
}

export interface Content {
    rendered:  string;
    protected: boolean;
}

export interface GUID {
    rendered: string;
}

export interface YoastHeadJSON {
    title:                  string;
    robots:                 Robots;
    canonical:              string;
    og_locale:              string;
    og_type:                string;
    og_title:               string;
    og_description:         string;
    og_url:                 string;
    og_site_name:           string;
    article_published_time: string;
    og_image:              OgImage[];
    twitter_card:           string;
    twitter_misc:           TwitterMisc;
    schema:                 Schema;
}

export interface OgImage {
    width:  number;
    height: number;
    url:    string;
    type:   string;
}

export interface Robots {
    index:               string;
    follow:              string;
    "max-snippet":       string;
    "max-image-preview": string;
    "max-video-preview": string;
}

export interface Schema {
    "@context": string;
    "@graph":   Graph[];
}

export interface Graph {
    "@type":             string;
    "@id":               string;
    url?:                string;
    name?:               string;
    description?:        string;
    potentialAction?:    PotentialAction[];
    inLanguage?:         InLanguage;
    contentUrl?:         string;
    width?:              number;
    height?:             number;
    isPartOf?:           BreadcrumbClass;
    primaryImageOfPage?: BreadcrumbClass;
    datePublished?:      string;
    dateModified?:       string;
    author?:             BreadcrumbClass;
    breadcrumb?:         BreadcrumbClass;
    itemListElement?:    ItemListElement[];
    image?:              Image;
    sameAs?:             string[];
}

export interface BreadcrumbClass {
    "@id": string;
}

export interface Image {
    "@type":    string;
    "@id":      string;
    inLanguage: InLanguage;
    url:        string;
    contentUrl: string;
    caption:    string;
}

export enum InLanguage {
    EnUS = "en-US",
}

export interface ItemListElement {
    "@type":  ItemListElementType;
    position: number;
    name:     string;
    item?:    string;
}

export enum ItemListElementType {
    ListItem = "ListItem",
}

export interface PotentialAction {
    "@type":        PotentialActionType;
    target:         string[] | TargetClass;
    "query-input"?: string;
}

export enum PotentialActionType {
    ReadAction = "ReadAction",
    SearchAction = "SearchAction",
}

export interface TargetClass {
    "@type":     string;
    urlTemplate: string;
}

export interface TwitterMisc {
    "Est. reading time"?: string;
    "Written by"?:        string;
}

export default interface Category {
    id:              number;
    count:           number;
    description:     string;
    link:            string;
    name:            string;
    slug:            string;
    taxonomy:        string;
    parent:          number;
    meta:            any[];
    yoast_head:      string;
    yoast_head_json: YoastHeadJSON;
    _links:          Links;
}

export interface Links {
    self:           About[];
    collection:     About[];
    about:          About[];
    "wp:post_type": About[];
    curies:         Cury[];
}

export interface About {
    href: string;
}

export interface Cury {
    name:      string;
    href:      string;
    templated: boolean;
}

export interface YoastHeadJSON {
    title:        string;
    robots:       Robots;
    canonical:    string;
    og_locale:    string;
    og_type:      string;
    og_title:     string;
    og_url:       string;
    og_site_name: string;
    twitter_card: string;
    schema:       Schema;
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
    "@type":          GraphType;
    "@id":            string;
    url?:             string;
    name?:            string;
    description?:     string;
    potentialAction?: PotentialAction[];
    inLanguage?:      InLanguage;
    isPartOf?:        Breadcrumb;
    breadcrumb?:      Breadcrumb;
    itemListElement?: ItemListElement[];
}

export enum GraphType {
    BreadcrumbList = "BreadcrumbList",
    CollectionPage = "CollectionPage",
    WebSite = "WebSite",
}

export interface Breadcrumb {
    "@id": string;
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

/**
 * Autogenerated types when fetching path.json
 */

import { LinxInstallment } from "./installments.ts";
import { LinxError } from "./common.ts";
import { Facet } from "./facets.ts";

export interface WebPage {
  Response: Response;
  Model: Model;
  PageInfo: PageInfo;
}

export interface Model {
  Category: Category;
  CategoryID: number;
  Grid: Grid;
  GroupName: string;
  Message: null;
  Name: string;
  Navigation: Navigation[];
  Provider: string;
  SearchId: string;
  SortAlias: null;
  Url: string;
}

export interface Category {
  CreatedBy: string;
  CreatedDate: string;
  IntegrationID: null;
  ModifiedBy: null;
  ModifiedDate: null;
}

export interface Grid {
  Facets: Facet[];
  HasNextPage: boolean;
  HasPreviousPage: boolean;
  HasProducts: boolean;
  PageCount: number;
  PageFirst: number;
  PageIndex: number;
  PageLast: number;
  PageNumber: number;
  PageSize: number;
  ProductCount: number;
  Products: Product[];
  ProviderCapabilities: ProviderCapabilities;
  Query: string;
  SortOptions: SortOption[];
  Spell: Spell;
  Terms: unknown[];
}

export interface Product {
  AllowOnlyAdditionalPurchase: boolean;
  Availability: string;
  AvailabilityText: string;
  Backorderable: boolean;
  BrandID: number;
  BrandImageUrl: string;
  BrandName: string;
  BrandUrl: string;
  BrowsingImage: BrowsingImage;
  BrowsingImages: BrowsingImage[];
  CatalogItemBehavior: string;
  CatalogItemTypeID: number;
  CategoryItems: CategoryItem[];
  ClickUrl: string;
  Condition: string;
  CurrentSellerID: number;
  CurrentSkuID: number;
  Descriptions: Description[];
  DisplayCondition: boolean;
  DisplayPrice: string;
  DisplayStockQuantity: boolean;
  EstimatedReorderDate: null;
  ExtendedMetadatas: Description[];
  Flags: unknown[];
  HasCurrentSkuID: boolean;
  HasEstimatedReorderDate: boolean;
  HasPickup: boolean;
  IntegrationID: string;
  IsFreeShipping: boolean;
  IsGiftCertificate: boolean;
  IsInventoryAvailable: boolean;
  IsNew: boolean;
  IsPromotion: boolean;
  IsPurchasable: boolean;
  IsUndeliverable: boolean;
  IsUponRequest: boolean;
  Items: Item[];
  JoinCollection: null;
  LeafCategoryId: number;
  LeafCategoryName: string;
  LeafCategoryUrl: string;
  ListPrice: number;
  LoyaltyProgramPoints: unknown[];
  MediaGroups: MediaGroup[];
  Medias: BrowsingImage[];
  MediaSmall: string;
  MetaDescription: string;
  MetaKeywords: string;
  MininumOfDistinctSKUs: number;
  MininumOfSKUsQuantity: number;
  Name: string;
  NewFrom: null | string;
  NewTo: null;
  Options: Option[];
  OutOfStockFrom: null;
  OutOfStockTo: null;
  PageTitle: string;
  Preorderable: boolean;
  PreorderDate: string;
  Price: Price;
  PriceDescription: string;
  ProductDefinition: null;
  ProductDefinitionID: number;
  ProductID: number;
  ProductSelection: ProductSelection;
  ProductTypeID: number;
  PromotionFrom: null | string;
  PromotionOnlyCheckout: boolean;
  PromotionPrice: number;
  PromotionTo: null;
  PropertyPath: string;
  PurchasingFormID: number;
  QuantityReturned: null;
  RatingAverage: number;
  RatingCount: number;
  ReplenishmentStatus: string;
  RetailPrice: number;
  RetailPriceMax: number;
  RetailPriceMin: number;
  ReviewCount: number;
  RootCategoryName: string;
  RootCategoryUrl: string;
  ShortDescription: string;
  SKU: string;
  StockBalance: string;
  StockOnHand: string;
  Tags: Tag[];
  Tax: number;
  TaxationAmount: number;
  Uom: string;
  Url: string;
  VisibleFrom: string;
  VisibleTo: null;
}

export interface BrowsingImage {
  Attributes: unknown[];
  HasMediaPath: boolean;
  Height: number;
  Index: number;
  MaxHeight: number;
  MaxWidth: number;
  MediaPath: string;
  MediaSizeType: string;
  MediaType: string;
  ProductPath: string;
  Title: null;
  Url: null;
  VariationPath: string;
  Width: number;
}

export interface CategoryItem {
  ID: string;
  Name: string;
  ParentID: string;
}

export interface Description {
  Alias: string;
  Color: null | string;
  GroupName: null | string;
  GroupType: string;
  ImagePath: null | string;
  Name: string;
  Order: number;
  PropertyMetadataID: number;
  PropertyPath: string;
  Reference: null | string;
  Title: string;
  Value: string;
  ValueAlias: string;
}

export interface Item {
  Availability: string;
  AvailabilityText: string;
  Backorderable: boolean;
  BackorderLimit: null;
  BundleAdjustType: string;
  BundleAdjustValue: number;
  BundleGroup: null;
  BundleHierarchyPrice: null;
  BundleKitDiscount: string;
  BundleKitDiscountValue: number;
  BundlePriceType: string;
  BundleQuantity: number;
  BundleType: string;
  BuyBox: null;
  CatalogItemBehavior: string;
  CatalogItemTypeID: number;
  ComposeMinPrice: boolean;
  Depth: number;
  Edit: null;
  EstimatedReorderDate: null;
  ExtendedMetadatas: Description[];
  HandlingDays: number;
  HasEstimatedReorderDate: boolean;
  Height: number;
  InStockHandlingDays: number;
  IntegrationID: null | string;
  IsBundleItemRequired: boolean;
  IsDeliverable: boolean;
  IsInventoryAvailable: boolean;
  IsPromotion: boolean;
  IsPurchasable: boolean;
  Items: Item[];
  ListPrice: number;
  LoyaltyProgramPoints: unknown[];
  MaximumQtyAllowed: number;
  MinimumQtyAllowed: number;
  Name: string;
  Options: Option[];
  Order: number;
  OutOfStockFrom: null;
  OutOfStockHandlingDays: number;
  OutOfStockTo: null;
  Preorderable: boolean;
  PreorderDate: string;
  Price: null;
  PriceDescription: null | string;
  ProductDefinition: null;
  ProductID: number;
  ProductLevel: number;
  ProductPath: string;
  ProductTypeID: number;
  PromotionFrom: null | string;
  PromotionPrice: number;
  PromotionTo: null;
  ReplenishmentStatus: string;
  RetailPrice: number;
  SKU: string;
  SKUOptions: Description[];
  StockBalance: number;
  Tax: number;
  TaxationAmount: number;
  UPC: null;
  UrlFriendly: string;
  VariationLevel: number;
  VariationPath: string;
  Weight: number;
  Width: number;
}

export interface Option {
  HasVariationLayout: boolean;
  IsVerificationRequired: boolean;
  Label: string;
  PropertyMetadataID: number;
  PropertyName: string;
  Values: Value[];
  VariationLayoutTemplate: string;
}

export interface Value {
  Color: null | string;
  GroupName: null;
  HasItems: boolean;
  ImagePath: null | string;
  IsSelected: boolean;
  OptionID: number;
  Order: number;
  PropertyPath: string;
  Reference: null;
  Text: string;
  Value: string;
}

export interface MediaGroup {
  Custom: null;
  IsPurchasable: boolean;
  Large: BrowsingImage;
  Medias: BrowsingImage[];
  MediaType: string;
  Medium: BrowsingImage;
  ProductLevel: number;
  ProductPath: string;
  Small: BrowsingImage;
  Thumbnail: BrowsingImage;
  VariationLevel: number;
  VariationPath: string;
  Zoom: BrowsingImage;
}

export interface Price {
  BestInstallment: LinxInstallment | null;
  BestInstallmentCreditCard: null;
  BuyBox: BuyBox;
  CurrentPaymentTerm: null;
  HasBuyBox: boolean;
  HasMunknownSkus: boolean;
  HasSalesPrice: boolean;
  IsNullPrice: boolean;
  ItemAddFreeItem: null;
  ListPrice: number;
  ListPriceWithTax: number;
  MaxInstallmentsNoInterest: LinxInstallment | null;
  MaxInstallmentsWithInterest: null;
  SalesPrice: number;
  SalesPriceDiscount: number;
  SalesPriceWithTax: number;
  SalesPriceWithTaxDiscount: number;
  Tax: number;
  TaxationAmount: number;
}

export interface BuyBox {
  SellerID: number;
  SellerName: null;
}

export interface ProductSelection {
  PropertyLevel: number;
  PropertyPath: string;
  Quantity: number;
  SkuID: number;
}

export interface Tag {
  Label: string;
  TagID: number;
}

export interface ProviderCapabilities {
  CanFacet: boolean;
  CanPage: boolean;
  CanSort: boolean;
  CanSpell: boolean;
  CanTerm: boolean;
  Provider: string;
}

export interface SortOption {
  Alias: string;
  Label: string;
  Selected: boolean;
}

export interface Spell {
  Collation: string;
  Options: unknown[];
}

export interface Navigation {
  CustomUrl: null;
  Depth: number;
  ID: number;
  Text: string;
  Url: string;
  UrlFriendly: string;
}

export interface PageInfo {
  AlternateTitle: string;
  BodyClass: string;
  CanonicalLink: string;
  CanonicalNextLink: string;
  CanonicalPrevLink: string;
  DefaultAlternateTitle: null;
  DefaultDescription: null;
  DefaultMetaDescription: string;
  DefaultMetaKeywords: string;
  DefaultPageTitle: string;
  Description: string;
  HttpStatusCode: number;
  IndexPage: boolean;
  MetaDescription: string;
  MetaKeywords: string;
  PageTitle: string;
  RouteClass: string;
  SectionClass: string;
}

export interface Response {
  Errors: LinxError[];
  IsValid: boolean;
  RefreshBasket: boolean;
  ResponseCallBack: ResponseCallBack;
  SuccessMessage: null;
  Url: null;
  Warnings: unknown[];
}

export interface ResponseCallBack {
  Code: string;
  Parameters: unknown[];
  Value: string;
}

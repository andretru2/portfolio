export type SiteConfig = {
  name: string;
  title: string;
  description: string;
  image: {
    src: string;
    alt: string;
  };
  socialLinks?: SocialLink[];
};

export type SocialLink = {
  platform: string;
  href: string;
  me?: string;
  text: string;
  icon: string;
  footerOnly?: boolean;
};

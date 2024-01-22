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

export type RequireSome<T, P extends keyof T> = Omit<T, P> &
  Required<Pick<T, P>>;

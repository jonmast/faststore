import { Banner, BannerContent, BannerLink, LinkButton } from '@faststore/ui'
import type { HTMLAttributes } from 'react'

import Section from '../Section'
import styles from './section.module.scss'

type BannerTextVariant =
  | {
      variant?: 'primary'
      /**
       * The content for the h2 tag.
       */
      title: string
      caption?: never
    }
  | {
      variant: 'secondary'
      /**
       * The content for the h2 tag.
       */
      title: string
      /**
       * The content for the p tag below the h2.
       */
      caption: string
    }

interface BaseProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * The href used at the link
   */
  actionPath: string
  /**
   * The label used at the link
   */
  actionLabel: string
  /**
   * Color variant combinations
   * @default: 'main'
   */
  colorVariant?: 'main' | 'light' | 'accent'
}

export type BannerTextProps = BaseProps & BannerTextVariant

// TODO: Change actionPath and actionLabel with Link
function BannerText({
  title,
  caption,
  actionPath,
  actionLabel,
  variant = 'primary',
  colorVariant = 'main',
}: BannerTextProps) {
  return (
    <Section className={`${styles.section} section-banner layout__section`}>
      <Banner
        data-fs-banner-text
        data-fs-banner-text-variant={variant}
        data-fs-banner-text-color-variant={colorVariant}
      >
        <BannerContent data-fs-banner-text-content className="layout__content">
          <div
            data-fs-banner-text-heading
            data-fs-banner-text-color-variant={colorVariant}
          >
            <h2>{title}</h2>
            {variant === 'secondary' && caption && <p>{caption}</p>}
          </div>
          <BannerLink data-fs-banner-text-link>
            <LinkButton
              href={actionPath}
              variant={variant}
              inverse={colorVariant === 'main'}
            >
              {actionLabel}
            </LinkButton>
          </BannerLink>
        </BannerContent>
      </Banner>
    </Section>
  )
}

export default BannerText

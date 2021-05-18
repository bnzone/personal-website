import siteMetadata from '@/data/siteMetadata'
import SocialIcon from '@/components/social-icons'
import { PageSeo } from '@/components/SEO'

export default function About() {
  return (
    <>
      <PageSeo
        title={`About - ${siteMetadata.author}`}
        description={`About me - ${siteMetadata.author}`}
        url={`${siteMetadata.siteUrl}/about`}
      />
      <div className="divide-y">
        <div className="pt-6 pb-8 space-y-2 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            About
          </h1>
        </div>
        <div className="items-start space-y-2 xl:grid xl:grid-cols-3 xl:gap-x-8 xl:space-y-0">
          <div className="flex flex-col items-center pt-8 space-x-2">
            <img src={siteMetadata.image} alt="avatar" className="w-48 h-52 rounded-full" />
            <h3 className="pt-4 pb-2 text-2xl font-bold leading-8 tracking-tight">
              {siteMetadata.author}
            </h3>
            <div className="text-gray-500 dark:text-gray-400">Software Developer</div>
            <div className="text-gray-500 dark:text-gray-400">San Francisco, CA</div>
            <div className="flex pt-6 space-x-3">
              <SocialIcon kind="instagram" href={siteMetadata.instagram} />
              <SocialIcon kind="mail" href={`mailto:${siteMetadata.email}`} />
              <SocialIcon kind="github" href={siteMetadata.github} />
              <SocialIcon kind="facebook" href={siteMetadata.facebook} />
              <SocialIcon kind="youtube" href={siteMetadata.youtube} />
              <SocialIcon kind="linkedin" href={siteMetadata.linkedin} />
              <SocialIcon kind="twitter" href={siteMetadata.twitter} />
            </div>
          </div>
          <div className="pt-8 pb-8 prose dark:prose-dark max-w-none xl:col-span-2">
            <p>Hey there, my name is Igor.</p>
            <p>I'm a software developer, self-development nerd, and YouTuber.</p>
            <p>
              I was born in Russia and since I was a kid, I've always had an interest in computers
              and technology, even though my official education led me elsewhere - to get a Master's
              degree in the field of Economics.
            </p>
            <p>
              However, my passion for computers never went away, and I eventually decided to fully
              pursue my dream of becoming a software developer after moving to the USA. I am always
              striving to learn the latest technologies and expand my knowledge.
            </p>
            <p>
              Currently, I'm improving my skills by developing full-stack web applications. The
              tools that I'm most comfortable with include React.js for the front-end and Node.js
              with Express.js for the back-end. As to the databases, I'm familiar with SQL, non-SQL,
              and Firebase workflows.
            </p>
            <p>In my spare time, I read books, travel, and make videos for my YouTube channels.</p>
            <p>
              At this moment I am looking forward to bringing my passion for code to a full-time
              role. I enjoy working with like-minded people and making amazing products that bring
              value to users.
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

import Link from '@/components/Link'
import { PageSeo } from '@/components/SEO'
import { Fragment, useState, useEffect } from 'react'
//import Tag from '@/components/Tag'
import siteMetadata from '@/data/siteMetadata'
import { getAllFilesFrontMatter } from '@/lib/mdx'
import * as THREE from 'three'

const MAX_DISPLAY = 5
const postDateTemplate = { year: 'numeric', month: 'long', day: 'numeric' }

export async function getStaticProps() {
  const posts = await getAllFilesFrontMatter('blog')

  return { props: { posts } }
}

export default function Home({ posts }) {
  useEffect(() => {
    var scene = new THREE.Scene()
    scene.background = new THREE.Color(0xffffff)
    var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
    var renderer = new THREE.WebGLRenderer()
    renderer.setSize(300, 300)
    document.querySelector('#model').appendChild(renderer.domElement)
    var geometry = new THREE.BoxGeometry(1, 1, 1)
    var material = new THREE.MeshBasicMaterial({ color: 0x000000 })
    var cube = new THREE.Mesh(geometry, material)
    scene.add(cube)
    camera.position.z = 5
    var animate = function () {
      requestAnimationFrame(animate)
      cube.rotation.x += 0.01
      cube.rotation.y += 0.01
      renderer.render(scene, camera)
    }
    animate()
  }, [])

  return (
    <Fragment>
      <PageSeo
        title={siteMetadata.title}
        description={siteMetadata.description}
        url={siteMetadata.siteUrl}
      />
      <div id="model-place" className="flex  justify-center h-screen">
        <div className=" divide-y divide-gray-200 dark:divide-gray-700">
          <div className=" pt-6 pb-8 space-y-2 md:space-y-5">
            <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14 ">
              Hey, I am Igor{' '}
              <span role="img" aria-label="hand waving emoji">
                👋🏻
              </span>
            </h1>
            <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
              {siteMetadata.description}
            </p>
            <div id="model" />
          </div>
          {/* <ul className="divide-y divide-gray-200 dark:divide-gray-700">
          {!posts.length && 'No posts found.'}
          {posts.slice(0, MAX_DISPLAY).map((frontMatter) => {
            const { slug, date, title, summary, tags } = frontMatter
            return (
              <li key={slug} className="py-12">
                <article>
                  {/* <div className="space-y-2 xl:grid xl:grid-cols-4 xl:space-y-0 xl:items-baseline"> */}
          {/* <dl>
                      <dt className="sr-only">Published on</dt>
                      <dd className="text-base font-medium leading-6 text-gray-500 dark:text-gray-400">
                        <time dateTime={date}>
                          {new Date(date).toLocaleDateString(siteMetadata.locale, postDateTemplate)}
                        </time>
                      </dd>
                    </dl>
                    <div className="space-y-5 xl:col-span-3">
                      <div className="space-y-6">
                        <div>
                          <h2 className="text-2xl font-bold leading-8 tracking-tight">
                            <Link
                              href={`/blog/${slug}`}
                              className="text-gray-900 dark:text-gray-100"
                            >
                              {title}
                            </Link>
                          </h2>
                          <div className="flex flex-wrap">
                            {tags ? tags.map((tag) => <Tag key={tag} text={tag} />) : ''}
                          </div>
                        </div>
                        <div className="prose text-gray-500 max-w-none dark:text-gray-400">
                          {summary}
                        </div>
                      </div>
                      <div className="text-base font-medium leading-6">
                        <Link
                          href={`/blog/${slug}`}
                          className="text-blue-500 hover:text-blue-600 dark:hover:text-blue-400"
                          aria-label={`Read "${title}"`}
                        >
                          Read more &rarr;
                        </Link>
                      </div>
                    </div>
                  </div> */}{' '}
          {/* </article>
              </li>
            )
          })}
        </ul> */}
          {/* <div className="pt-8 pb-8 prose dark:prose-dark max-w-none xl:col-span-2">
          <p>
            Since I was a kid, I always had an interest in computers and technology, even though my
            official education led me elsewhere - to get a Master's degree in the field of
            Economics.
          </p>
          <p>
            However, my passion for computers never went away, and I eventually decided to fully
            pursue my dream of becoming a software developer. I am always striving to learn the
            latest technologies and expand my knowledge. Currently, I'm improving my skills by
            developing web applications using HTML, CSS, and JavaScript. Some of my favorite
            libraries/frameworks include React, Redux, and Next.
          </p>
          <p>
            At this moment I am looking forward to bringing my passion to a full-time role. I enjoy
            working with like-minded people and making amazing products that bring value to users.
          </p>
        </div> */}
        </div>
      </div>
      {/* {posts.length > MAX_DISPLAY && (
        <div className="flex justify-end text-base font-medium leading-6">
          <Link
            href="/blog"
            className="text-blue-500 hover:text-blue-600 dark:hover:text-blue-400"
            aria-label="all posts"
          >
            All Posts &rarr;
          </Link>
        </div>
      )} */}
    </Fragment>
  )
}

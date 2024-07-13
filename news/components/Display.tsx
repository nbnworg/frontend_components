import React, { Component } from 'react';
import {
  ComponentSize,
  ComponentType,
  PostEditor,
  PostFrontend,
} from 'nbnw-ui-constants';
import Category from './Category';
import { getPostWidth } from '../utils/getPostWidth';
export default function Display({
  post,
  component,
  type,
}: {
  post: PostEditor | PostFrontend;
  component: ComponentType;
  type: string;
}) {
  const postImage = post.images ? post.images[0] : '';
  return (
    <div
      className={`p-4 ${
        type === 'frontend'
          ? ''
          : `${getPostWidth(
              component.size || ComponentSize.small
            )} hover:shadow-md rounded-lg`
      }`}
    >
      <article
        key={post.id}
        className='flex max-w-xl   flex-col justify-between p-3'
      >
        {type === 'frontend' && postImage && (
          <div className='relative  w-full h-48 md:h-60 lg:h-72'>
            <img
              src={postImage || ''}
              alt={post.title || 'Post image'}
              className='rounded-md hover:scale-[1.02 transition-all  lg:mr-40 w-full h-full object-cover'
            />
          </div>
        )}

        <div className='group relative'>
          {type === 'frontend' ? (
            component.size === ComponentSize.extraLarge ? (
              <div className='flex flex-col'>
                <h3 className='mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600'>
                  {post?.title && post.title.length > 50
                    ? `${post.title.substring(0, 50)}...`
                    : post?.title || 'Failed to load title'}
                </h3>
                <p className='mt-5 line-clamp-3 text-sm leading-6 text-gray-600'>
                  {post?.summary}
                </p>
              </div>
            ) : (
              <div className='flex flex-col'>
                <h3 className='mt-3 line-clamp-1 text-2xl font-semibold leading-6 text-gray-900 group-hover:text-gray-600 h-[27px]'>
                  {post?.title && post.title.length > 50
                    ? `${post.title.substring(0, 50)}...`
                    : post?.title || 'Failed to load title'}
                </h3>
              </div>
            )
          ) : (
            <>
              {' '}
              <h3 className='mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600'>
                <span className='absolute inset-0' />
                {post?.title || 'Failed to load title'}
              </h3>
              <p className='mt-5 line-clamp-3 text-sm leading-6 text-gray-600'>
                {post?.summary}
              </p>
            </>
          )}
        </div>
        <div className='relative mt-3 flex items-center gap-x-4'></div>
        <div className='flex items-center gap-x-4 text-xs'>
          <time dateTime={post?.createdDate} className='text-gray-500'>
            {post?.createdDate}
          </time>
          <Category post={post?.category || ''} />
        </div>
      </article>
    </div>
  );
}

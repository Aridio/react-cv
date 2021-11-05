import React from 'react';
import { SocialIcon } from 'react-social-icons';

const SocialNetworks = ({socialNetworks}) => {

  const rederSocialNetworks = () => {
    return socialNetworks.map((socialNetwork, i) => {
      // Extract parts of the url
      let cleanLink = /^(\w+):\/\/([^\/]+)([^]+)$/.exec(socialNetwork);

      // Get social name
      let socialName = cleanLink[2].replace(/^www\./,'').split('.').slice(0,-1).join('.');

      // Get username
      let userName = cleanLink[3]
      if(userName.endsWith('/')){
        userName = userName.slice(0, userName.lastIndexOf('/'));
      }
      
      return (
        <div key={i} className="flex flex-row xl:flex-col gap-y-4 gap-x-2 md:gap-x-4 xl:-gap-x-0">
          <div className="flex gap-x-2">
            <SocialIcon className="rounded" url={socialNetwork} target="_blank" rel="noreferrer" style={{
              height: '1.25rem',
              width: '1.25rem' }}/>
            <a target="_blank" rel="noreferrer" href={socialNetwork} className="flex items-center font-semibold capitalize hidden md:inline-block">
              {socialName}
            </a>
          </div>
          <a target="_blank" rel="noreferrer" href={socialNetwork} className="font-semibold md:text-gray-400 font-medium">{userName}</a>
        </div>
      )
    })
  }

  return (
    <div className="flex flex-col gap-y-5 xl:gap-y-4 justify-end">
      {rederSocialNetworks()}
    </div>
  )
}

export default SocialNetworks;
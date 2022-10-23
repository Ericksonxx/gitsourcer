import { useState, useEffect } from 'react'
import { useRouter } from 'next/router';
import axios from 'axios'
import { TwitterTimelineEmbed, TwitterShareButton, TwitterFollowButton, TwitterHashtagButton, TwitterMentionButton, TwitterTweetEmbed, TwitterMomentShare, TwitterDMButton, TwitterVideoEmbed, TwitterOnAirButton } from 'react-twitter-embed';


const User  = ({user})  => {

    const [data, setData] = useState()
    const [repos, setRepos] = useState()
    const [hire, setHire] = useState()
    const twitter = ""
    const bed =""
    const blog = ""
    const touchEmail = useState()



    const router = useRouter();


  useEffect(() => {
    fetch(`https://api.github.com/users/${user}`, {
        headers : new Headers ({
          'Authorization': 'Token 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'
        })
      })
       .then(response => response.json())
       .then(response => setData(response));


       fetch(`https://api.github.com/users/${user}/repos`, {
        headers : new Headers ({
          'Authorization': 'Token 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'
        })
      })
       .then(response => response.json())
       .then(response => setRepos(response));

       console.log(repos)
 }, [user]);








     console.log(data)
     console.log(user)
        if(data != undefined && repos != undefined){
            const firstName = data.name.split(' ').slice(0, -1).join(' ');
                const secondName = data.name.split(' ').slice(-1).join(' ');;
                const searchLink = `https://www.linkedin.com/search/results/people/?keywords=${firstName}%20${secondName}&origin=CLUSTER_EXPANSION&sid=mp2`

            if(data.twitter_username != undefined){         
                 bed =  <TwitterTimelineEmbed sourceType="profile" screenName={data.twitter_username} options={{height: 400}} />
            }
            if(data.blog != undefined){
                blog = <img src="https://img.icons8.com/ios-filled/50/FFFFFF/domain.png"/>
            }
            if(data.email != undefined){
                const link = `mailto:${data.email}`
                touchEmail = <div>
                    <a href={link}>
                    <img src="https://img.icons8.com/ios-filled/47/FFFFFF/circled-envelope.png"/>
                    </a>
                </div>
            }
            const hire = ""
            if (data.hireable == null){
                hire = "No info" 
            } else { hire = data.hireable.toString()}

        if(data.twitter_username){
            twitter = `@${data.twitter_username} on Twitter`
        }
        
            
            return(
                <div className="overflow-auto">
                    <div className="grid grid-cols-10 px-12 bg-slate-900 py-12">
                        <img src={data.avatar_url} className="w-40 h-40 rounded-full col-span-3" />
                        <div className=" col-span-6 text-slate-100">
                        <p className="font-bold text-3xl">
                            {user}
                            <span className="ml-6 mr-6 bg-slate-200 px-4 py-2 text-xs rounded-xl text-slate-800">
                                <a href={data.html_url}>
                                    Visit on GitHub
                                </a>
                            </span>
                        </p>
                        <p className="font-semibold mt-6">{data.name} - {twitter}</p>
                        <p>Hireable: {hire}</p>
                        
                        <p className="mt-6">📍 {data.location}</p>
                        <p>💼 Currently working at {data.company}</p>
                        <p>✍️ {data.blog}</p>
                        <p>✉️ {data.email}</p>
                        </div>
                    </div>
                    <div className="pl-12 pr-12 pt-12 pb-12 bg-slate-800 text-slate-100">
                        <div className="m-auto">
                        <p className="font-bold mb-2 mt-4 text-xl text-slate-100">Bio</p>
                        <hr className="text-slate-900"/>
                        <p>{data.bio}</p>
                        <div className="mt-4 mb-16">
                            <p className="mb-4">
                                <b>Latest Languages used</b>
                            </p>
                            <p>
                                <span className="bg-slate-200 w-fit px-4 py-2 text-slate-600 text-sm rounded-full ml-px mr-2 font-bold">{repos[0].language}</span>
                                <span className="bg-slate-200 w-fit px-4 py-2 text-slate-600 text-sm rounded-full ml-px mr-2 font-bold">{repos[2].language}</span>
                                <span className="bg-slate-200 w-fit px-4 py-2 text-slate-600 text-sm rounded-full ml-px mr-2 font-bold">{repos[3].language}</span>
                                <span className="bg-slate-200 w-fit px-4 py-2 text-slate-600 text-sm rounded-full ml-px mr-2 font-bold">{repos[4].language}</span>
                                <span className="bg-slate-200 w-fit px-4 py-2 text-slate-600 text-sm rounded-full ml-px mr-2 font-bold">{repos[5].language}</span>
                                <span className="bg-slate-200 w-fit px-4 py-2 text-slate-600 text-sm rounded-full ml-px mr-2 font-bold">{repos[6].language}</span>
                                <span className="bg-slate-200 w-fit px-4 py-2 text-slate-600 text-sm rounded-full ml-px mr-2 font-bold">{repos[7].language}</span>
                            </p>

                        </div>
                        </div>
                        <div className="grid grid-cols-4 mt-6">
                            <div className="col-span-1 border-2 border-slate-400 rounded-xl">
                                <p className="font-bold mb-6 text-center mt-4 text-xl">Quick Stats</p>
                                <p className="bg-slate-600 mb-6 text-center px-4 py-2 rounded-xl ml-4 mr-4"><b>Account started at</b> <br/> {new Date(data.created_at).toLocaleDateString()}</p>
                                <p className="bg-slate-600 mb-6 text-center px-4 py-2 rounded-xl ml-4 mr-4"><b>Public repositories</b><br/> {data.public_repos}</p>
                                <p className="bg-slate-600 mb-0 text-center px-4 py-2 rounded-xl ml-4 mr-4"><b>Last activity</b> <br/> {new Date(data.updated_at).toLocaleDateString()}</p>
                            </div>
                            <div className="ml-12 col-span-3 text-center pb-6 border-2 border-slate-400 rounded-xl">
                                <p className="font-bold mb-6 text-center mt-4 text-xl">Latest projects</p>
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="bg-slate-600 rounded-xl p-4 mx-4 my-2">
                                        <p className="font-bold text-lg">{repos[0].name}<span className="bg-slate-700 text-xs rounded-full text-slate-200 px-2 py-px ml-4">{repos[0].visibility}</span></p>
                                        <p>{repos[0].description}</p>
                                        <p className="mb-6">Made with {repos[0].language}</p>
                                        <a className="bg-slate-800 px-4 py-2 rounded-full text-slate-200 font-semibold" href={repos[0].html_url}>GitHub</a>
                                    </div>
                                    <div className="bg-slate-600 rounded-xl p-4 mx-4 my-2">
                                        <p className="font-bold text-lg">{repos[1].name}<span className="bg-slate-700 text-xs rounded-full text-slate-200 px-2 py-px ml-4">{repos[1].visibility}</span></p>
                                        <p>{repos[1].description}</p>
                                        <p className="mb-6">Made with {repos[1].language}</p>
                                        <a className="bg-slate-800 px-4 py-2 rounded-full text-slate-200 font-semibold" href={repos[1].html_url}>GitHub</a>
                                    </div>
                                    <div className="bg-slate-600 rounded-xl p-4 mx-4 my-2">
                                        <p className="font-bold text-lg">{repos[2].name}<span className="bg-slate-700 text-xs rounded-full text-slate-200 px-2 py-px ml-4">{repos[2].visibility}</span></p>
                                        <p>{repos[2].description}</p>
                                        <p className="mb-6">Made with {repos[2].language}</p>
                                        <a className="bg-slate-800 px-4 py-2 rounded-full text-slate-200 font-semibold" href={repos[2].html_url}>GitHub</a>
                                    </div>
                                    <div className="bg-slate-600 rounded-xl p-4 mx-4 my-2">
                                        <p className="font-bold text-lg">{repos[4].name}<span className="bg-slate-700 text-xs rounded-full text-slate-200 px-2 py-px ml-4">{repos[4].visibility}</span></p>
                                        <p>{repos[4].description}</p>
                                        <p className="mb-6">Made with {repos[4].language}</p>
                                        <a className="bg-slate-800 px-4 py-2 rounded-full text-slate-200 font-semibold" href={repos[4].html_url}>GitHub</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div className="bg-twitterblue py-20 grid grid-cols-2">
                    <div className="m-auto">
                        <img src="https://img.icons8.com/glyph-neue/128/FFFFFF/twitter.png"/>
                    </div>
                        <div className="w-4/6">
                            {bed}
                        </div>
                    </div>
                    <div className="grid grid-cols-3 text-center bg-slate-900 pt-20 text-slate-100">
                        <div>
                            <p className="text-2xl font-semibold">
                                Get in touch with <span className="text-slate-400">{data.login}</span>
                            </p>
                        </div>
                        <div className="grid grid-cols-3 m-auto text-center -mt-4 mb-20">
                            {touchEmail}
                            <a target="_blank" href={searchLink}>
                                <div className="w-fit px-4 py-px rounded-full">
                                    <a href={searchLink} target="_blank">
                                        <img src="https://img.icons8.com/glyph-neue/50/FFFFFF/linkedin-circled.png"/>
                                    </a>
                                </div>
                            </a>
                            <a target="_blank" href={data.blog}>
                                <div className="w-fit px-4 py-px rounded-full">
                                    <a href={data.blog} target="_blank">
                                        {blog}
                                    </a>
                                </div>
                            </a>

                       </div>
                        <div></div>
                    </div>
                    
                </div>
            )
        }
    


}

export default User
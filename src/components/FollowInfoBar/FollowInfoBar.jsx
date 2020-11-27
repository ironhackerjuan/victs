import './FollowInfoBar.css'

import React from 'react'

export default function FollowInfoBar({followInfo, onClick}) {
    return (
        <div className={followInfo.following.length > 0 ? 'followers disabled' : 'followers'} onClick={onClick}>
            {followInfo.followers.length} followers
        </div>
    )
}

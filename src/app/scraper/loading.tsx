
import { LoadingSpinner } from '@/components/common/loader'
import React from 'react'

const Loading = () => {
    return (
        <>
            <div className="h-full w-full flex-col p-5 flex items-center gap-5 justify-center">
                <span className="text-xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-xl">SCRAPER</span>
                <LoadingSpinner />
            </div>
        </>
    )
}

export default Loading
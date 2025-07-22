import React from 'react'

export default function Loading() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-white">
            <div className="flex flex-col items-center gap-4">
                <div className="w-12 h-12 border-4 border-dashed border-[#C09578] border-t-transparent rounded-full animate-spin"></div>
                <p className="text-gray-700 text-sm font-medium">Loading, please wait...</p>
            </div>
        </div>
    )
}
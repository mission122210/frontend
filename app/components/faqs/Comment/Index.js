"use client"

import { useState, useRef, useLayoutEffect } from "react"

// Mock users for demonstration
const mockUsers = [
    { id: 1, name: "Sarah Johnson", avatar: "SJ", verified: true },
    { id: 2, name: "Mike Chen", avatar: "MC", verified: false },
    { id: 3, name: "Emma Davis", avatar: "ED", verified: true },
    { id: 4, name: "Alex Rodriguez", avatar: "AR", verified: false },
    { id: 5, name: "Lisa Wang", avatar: "LW", verified: true },
    { id: 6, name: "John Smith", avatar: "JS", verified: false },
    { id: 7, name: "Maria Garcia", avatar: "MG", verified: true },
    { id: 8, name: "David Kim", avatar: "DK", verified: false },
    { id: 9, name: "Nina Patel", avatar: "NP", verified: true },
    { id: 10, name: "Kevin Brown", avatar: "KB", verified: false },
    { id: 11, name: "Olivia Thompson", avatar: "OT", verified: true },
    { id: 12, name: "Daniel Lee", avatar: "DL", verified: false },
    { id: 13, name: "Ava Martinez", avatar: "AM", verified: true },
    { id: 14, name: "Liam Walker", avatar: "LW", verified: false },
    { id: 15, name: "Chloe Adams", avatar: "CA", verified: true },
    { id: 16, name: "Ethan Turner", avatar: "ET", verified: false },
    { id: 17, name: "Grace Hall", avatar: "GH", verified: true },
    { id: 18, name: "Noah Young", avatar: "NY", verified: false },
    { id: 19, name: "Sophia Clark", avatar: "SC", verified: true },
    { id: 20, name: "Jackson Wright", avatar: "JW", verified: false },
    { id: 21, name: "Isabella Scott", avatar: "IS", verified: true },
    { id: 22, name: "Benjamin Lopez", avatar: "BL", verified: false },
    { id: 23, name: "Zoe Hill", avatar: "ZH", verified: true },
    { id: 24, name: "Ryan Green", avatar: "RG", verified: false },
    { id: 25, name: "Mia Rivera", avatar: "MR", verified: true },
    { id: 26, name: "Dylan Carter", avatar: "DC", verified: true },
    { id: 27, name: "Hailey Nguyen", avatar: "HN", verified: false },
    { id: 28, name: "Jason Brooks", avatar: "JB", verified: true },
    { id: 29, name: "Samantha Lee", avatar: "SL", verified: false },
    { id: 30, name: "Tyler Scott", avatar: "TS", verified: true },
    { id: 31, name: "Emily Ross", avatar: "ER", verified: false },
    { id: 32, name: "Anthony Reed", avatar: "AR", verified: true },
    { id: 33, name: "Brianna Knight", avatar: "BK", verified: false },
    { id: 34, name: "Caleb Foster", avatar: "CF", verified: true },
    { id: 35, name: "Jasmine Ali", avatar: "JA", verified: false },
    { id: 36, name: "Logan Murphy", avatar: "LM", verified: true },
    { id: 37, name: "Ella Simmons", avatar: "ES", verified: false },
    { id: 38, name: "Nathan Price", avatar: "NP", verified: true },
    { id: 39, name: "Ariana Bell", avatar: "AB", verified: false },
    { id: 40, name: "Sean Matthews", avatar: "SM", verified: true },
    { id: 41, name: "Madison Harper", avatar: "MH", verified: false },
    { id: 42, name: "Isaac Long", avatar: "IL", verified: true },
    { id: 43, name: "Victoria Park", avatar: "VP", verified: false },
    { id: 44, name: "Gavin Reed", avatar: "GR", verified: true },
    { id: 45, name: "Nicole Torres", avatar: "NT", verified: false },
    { id: 46, name: "Owen Ellis", avatar: "OE", verified: true },
    { id: 47, name: "Kayla Barnes", avatar: "KB", verified: false },
    { id: 48, name: "Tristan Webb", avatar: "TW", verified: true },
    { id: 49, name: "Hannah Cruz", avatar: "HC", verified: false },
    { id: 50, name: "Adrian Scott", avatar: "AS", verified: true },
    { id: 51, name: "Bella Singh", avatar: "BS", verified: false },
    { id: 52, name: "Miles Hunt", avatar: "MH", verified: true },
    { id: 53, name: "Lily Chen", avatar: "LC", verified: false },
    { id: 54, name: "Jordan Blake", avatar: "JB", verified: true },
    { id: 55, name: "Stella Morgan", avatar: "SM", verified: false },
    { id: 56, name: "Cole Andrews", avatar: "CA", verified: true },
    { id: 57, name: "Riley Hayes", avatar: "RH", verified: false },
    { id: 58, name: "Vanessa Moore", avatar: "VM", verified: true },
    { id: 59, name: "Leo Fernandez", avatar: "LF", verified: false },
    { id: 60, name: "Amber Patel", avatar: "AP", verified: true },
];

const CommentComponent = ({ comment, faqId, isReply = false, parentCommentId = null }) => {
    // Check if this is a new user comment (has userName property) or existing mock user
    const isNewUser = comment.userName
    const user = isNewUser ? null : getUserById(comment.userId)
    const displayName = isNewUser ? comment.userName : user?.name
    const displayAvatar = isNewUser ? comment.avatar : user?.avatar
    const isVerified = isNewUser ? false : user?.verified

    const [replyingTo, setReplyingTo] = useState(null)
    const [replyText, setReplyText] = useState("")

    const getUserById = (userId) => {
        return mockUsers.find((user) => user.id === userId) || mockUsers[0]
    }

    const handleAddReply = (faqId, commentId) => {
        if (!replyText.trim()) return

        const newReply = {
            id: Date.now(),
            userId: Date.now(),
            userName: "You", // For replies, we can use "You" or ask for name again
            avatar: "YU",
            text: replyText.trim(),
            timestamp: "Just now",
            likes: 0,
            likedByUser: false,
        }

        setComments((prev) => ({
            ...prev,
            [faqId]: prev[faqId].map((comment) =>
                comment.id === commentId ? { ...comment, replies: [...comment.replies, newReply] } : comment,
            ),
        }))

        setReplyText("")
        setReplyingTo(null)
    }

    const handleLikeComment = (faqId, commentId, isReply = false, parentCommentId = null) => {
        setComments((prev) => ({
            ...prev,
            [faqId]: prev[faqId].map((comment) => {
                if (isReply && comment.id === parentCommentId) {
                    return {
                        ...comment,
                        replies: comment.replies.map((reply) =>
                            reply.id === commentId
                                ? {
                                    ...reply,
                                    likes: reply.likedByUser ? reply.likes - 1 : reply.likes + 1,
                                    likedByUser: !reply.likedByUser,
                                }
                                : reply,
                        ),
                    }
                } else if (!isReply && comment.id === commentId) {
                    return {
                        ...comment,
                        likes: comment.likedByUser ? comment.likes - 1 : comment.likes + 1,
                        likedByUser: !comment.likedByUser,
                    }
                }
                return comment
            }),
        }))
    }

    return (
        <div className={`${isReply ? "ml-8 mt-3" : "mb-4"} bg-gray-50 rounded-lg p-4`}>
            <div className="flex items-start space-x-3">
                <div className="flex-shrink-0">
                    <div className="w-8 h-8 bg-emerald-500 rounded-full flex items-center justify-center text-white text-sm font-semibold">
                        {displayAvatar}
                    </div>
                </div>
                <div className="flex-1 min-w-0">
                    <div className="flex items-center space-x-2">
                        <p className="text-sm font-semibold text-gray-900">{displayName}</p>
                        {isVerified && (
                            <div className="w-4 h-4 bg-blue-500 rounded-full flex items-center justify-center">
                                <svg className="w-2.5 h-2.5 text-white" fill="currentColor" viewBox="0 0 20 20">
                                    <path
                                        fillRule="evenodd"
                                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                            </div>
                        )}
                        <span className="text-xs text-gray-500">{comment.timestamp}</span>
                    </div>
                    <p className="mt-1 text-sm text-gray-700">{comment.text}</p>
                    {comment.images && comment.images.length > 0 && (
                        <div className="mt-3 flex flex-wrap gap-3">
                            {comment.images.map((image, index) => (
                                <img
                                    key={index}
                                    src={image}
                                    alt={`Comment image ${index + 1}`}
                                    className="max-h-110 w-auto rounded-md object-contain flex-shrink-0"
                                />
                            ))}
                        </div>
                    )}

                    <div className="mt-2 flex items-center space-x-4">
                        <button
                            onClick={() => handleLikeComment(faqId, comment.id, isReply, parentCommentId)}
                            className={`flex items-center space-x-1 text-xs ${comment.likedByUser ? "text-red-500" : "text-gray-500"} hover:text-red-500 transition-colors`}
                        >
                            <ThumbsUp size={14} className={comment.likedByUser ? "fill-current" : ""} />
                            <span>{comment.likes}</span>
                        </button>
                        {!isReply && (
                            <button
                                onClick={() => setReplyingTo(replyingTo === comment.id ? null : comment.id)}
                                className="flex items-center space-x-1 text-xs text-gray-500 hover:text-emerald-500 transition-colors"
                            >
                                <MessageCircle size={14} />
                                <span>Reply</span>
                            </button>
                        )}
                    </div>

                    {replyingTo === comment.id && (
                        <div className="mt-3 flex space-x-2">
                            <input
                                type="text"
                                value={replyText}
                                onChange={(e) => setReplyText(e.target.value)}
                                placeholder="Write a reply..."
                                className="flex-1 px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                                onKeyPress={(e) => e.key === "Enter" && handleAddReply(faqId, comment.id)}
                            />
                            <button
                                onClick={() => handleAddReply(faqId, comment.id)}
                                className="px-3 py-2 bg-emerald-500 text-white rounded-lg hover:bg-emerald-600 transition-colors"
                            >
                                <Send size={14} />
                            </button>
                        </div>
                    )}

                    {comment.replies && comment.replies.length > 0 && (
                        <div className="mt-3">
                            {comment.replies.map((reply) => (
                                <CommentComponent
                                    key={reply.id}
                                    comment={reply}
                                    faqId={faqId}
                                    isReply={true}
                                    parentCommentId={comment.id}
                                />
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default CommentComponent
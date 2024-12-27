import VideoPlayer from "../Video/VideoPlayer";

const Post = ({ post }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-4 mb-4">
      {/* Header */}
      <div className="flex items-center mb-2">
        <img
          src={post.userImage}
          alt="user"
          className="w-10 h-10 rounded-full"
        />
        <div className="ml-2">
          <h2 className="font-bold">{post.username}</h2>
          <p className="text-sm text-gray-500">{post.timestamp}</p>
        </div>
      </div>

      {/* Caption */}
      <p className="mb-2">{post.caption}</p>

      {/* Content */}
      <div className="grid grid-cols-2 gap-2">
        {post.images &&
          post.images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt="post"
              className="rounded-lg h-40 object-cover"
            />
          ))}
        {post.videos &&
          post.videos.map((video, index) => (
            <VideoPlayer key={index} src={video} />
          ))}
      </div>

      {/* Footer */}
      <div className="flex justify-between mt-2">
        <button className="text-pink-500">❤️ {post.likes}</button>
        <button className="text-blue-500">💬 {post.comments}</button>
        <button className="text-gray-700">🔗 Share</button>
      </div>
    </div>
  );
};

export default Post;

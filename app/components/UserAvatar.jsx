export default function UserAvatar({ user }) {
  return (
    <div className="relative flex items-center space-x-3 mb-2 ml-1">
      <div className="flex-shrink-0">
        <img
          className="inline-block h-10 w-10 rounded-full object-cover"
          src={user.avatar}
          alt=""
        />
      </div>
      <div className="min-w-0 flex-1">
        <a href="#" className="focus:outline-none">
          <span className="absolute inset-0" aria-hidden="true" />
          <p className="text-sm font-medium text-gray-900">{user.name}</p>
        </a>
      </div>
    </div>
  );
}

export default function UserAvatar({ user }) {
  return (
    <div className="relative flex items-center space-x-3 mb-2 ml-1">
      <div className="flex-shrink-0">
        {user.avatar ? (
          <img
            className="inline-block h-10 w-10 rounded-full object-cover"
            src={user.avatar}
            alt=""
          />
        ) : (
          avatarFromInitials(user.name)
        )}
      </div>
      <div className="min-w-0 flex-1">
        <span className="absolute inset-0" aria-hidden="true" />
        <p className="text-sm font-medium text-gray-900">{user.name}</p>
      </div>
    </div>
  );
}

export function avatarFromInitials(userName, className) {
  const initials = userName
    .split(" ")
    .map((name) => name[0])
    .join("");
  return (
    <img
      src={`https://ui-avatars.com/api/?name=${initials}&size=256&background=6574cd&color=fff`}
      alt={userName}
      className={
        className ?? "inline-block h-10 w-10 rounded-full object-cover"
      }
    />
  );
}

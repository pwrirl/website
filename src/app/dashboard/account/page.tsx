"use client";
import { useEffect, useState, useRef } from "react";
import { Icon } from "@iconify/react";

export default function AccountPage() {
  // Try to get user data from localStorage/sessionStorage if available
  const [user, setUser] = useState<{
    username?: string;
    first_name?: string;
    last_name?: string;
    email?: string;
    address?: string;
    city?: string;
    state?: string;
    zip?: string;
    country?: string;
    verified?: string;
    avatar?: string;
  } | null>(null);

  const fileInputRef = useRef<HTMLInputElement>(null);
  const [editingProfile, setEditingProfile] = useState(false);
  const [profileForm, setProfileForm] = useState<any>(null);
  const [profileError, setProfileError] = useState<string | null>(null);

  useEffect(() => {
    // Try to get from window (if dashboard layout already fetched it)
    if (window && (window as any).dashboardUser) {
      setUser((window as any).dashboardUser);
      return;
    }
    // Otherwise, fetch from API
    fetch("/api/session/user")
      .then(res => res.json())
      .then(data => {
        if (data.user) {
          setUser(data.user);
          (window as any).dashboardUser = data.user;
        }
      });
  }, []);

  useEffect(() => {
    if (user && !profileForm) setProfileForm(user);
  }, [user]);

  const handleAvatarClick = () => {
    if (fileInputRef.current) fileInputRef.current.click();
  };

  const handleAvatarChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    if (!['image/png', 'image/jpeg', 'image/jpg'].includes(file.type)) {
      alert('Only PNG and JPG images are allowed.');
      return;
    }
    const formData = new FormData();
    formData.append('avatar', file);
    const res = await fetch('/api/account/avatar', {
      method: 'POST',
      body: formData,
    });
    if (res.ok) {
      const data = await res.json();
      if (data.avatar) {
        setUser((prev) => prev ? { ...prev, avatar: data.avatar } : prev);
        (window as any).dashboardUser = { ...user, avatar: data.avatar };
      }
    } else {
      alert('Failed to upload avatar.');
    }
  };

  const handleProfileEdit = () => {
    setProfileForm(user);
    setEditingProfile(true);
    setProfileError(null);
  };
  const handleProfileCancel = () => {
    setProfileForm(user);
    setEditingProfile(false);
    setProfileError(null);
  };
  const handleProfileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setProfileForm((prev: any) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  const handleProfileSave = async () => {
    setProfileError(null);
    const updated = { ...user, ...profileForm };
    setUser(updated); // Optimistic update
    setEditingProfile(false);
    (window as any).dashboardUser = updated;
    // Save to backend
    const res = await fetch("/api/account/profile", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(profileForm),
    });
    if (!res.ok) {
      setUser(user); // Revert
      setProfileError("Failed to save changes. Please try again.");
      setEditingProfile(true);
    }
  };

  if (!user) {
    return (
      <div className="flex justify-center items-center h-full">
        <span className="text-white/60 text-lg">Loading account info...</span>
      </div>
    );
  }

  return (
    <div className="max-w-xl mx-auto mt-10 space-y-10">
      {/* User Info Card */}
      <div className="bg-[#23232b] rounded-2xl shadow-2xl p-8 border border-[#353535]/40">
        <div className="flex items-center gap-4 mb-8">
          <div
            className="w-28 h-28 rounded-full border-4 border-[#e20074] bg-[#e20074] flex items-center justify-center text-3xl font-bold cursor-pointer overflow-hidden transition-all duration-200 hover:shadow-lg"
            onClick={handleAvatarClick}
            title="Click to upload avatar"
          >
            {user.avatar ? (
              <img src={typeof user.avatar === 'string' ? user.avatar : URL.createObjectURL(new Blob([user.avatar]))} alt="Avatar" className="w-full h-full object-cover rounded-full" />
            ) : (
              <Icon icon="carbon:user-avatar-filled" width="64" height="64" className="text-white" />
            )}
            <input
              type="file"
              accept="image/png, image/jpeg"
              className="hidden"
              ref={fileInputRef}
              onChange={handleAvatarChange}
            />
          </div>
          <div>
            <div className="text-2xl font-bold text-white mb-1">
              {user.username ?? user.first_name ?? "User"}
            </div>
            <div className="text-white/70 text-sm">Account Overview</div>
          </div>
        </div>
        <div className="space-y-6">
          {profileError && (
            <div className="mb-4 rounded-lg bg-red-500/10 p-3 border border-red-500/20 text-red-400 text-sm">{profileError}</div>
          )}
          <div className="mb-6">
            <div className="text-white/60 text-xs font-semibold mb-1">Username</div>
            {editingProfile ? (
              <input
                type="text"
                name="username"
                value={profileForm?.username ?? ""}
                onChange={handleProfileChange}
                className="text-lg text-white font-mono bg-[#18181b] rounded-lg px-4 py-2 border border-[#353535]/30 min-h-[48px] w-full"
              />
            ) : (
              <div className="text-lg text-white font-mono bg-[#18181b] rounded-lg px-4 py-2 border border-[#353535]/30 min-h-[48px] flex items-center">
                {user.username ?? ""}
              </div>
            )}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <div className="text-white/60 text-xs font-semibold mb-1">First Name</div>
              {editingProfile ? (
                <input
                  type="text"
                  name="first_name"
                  value={profileForm?.first_name ?? ""}
                  onChange={handleProfileChange}
                  className="text-lg text-white font-mono bg-[#18181b] rounded-lg px-4 py-2 border border-[#353535]/30 w-full"
                />
              ) : (
                <div className="text-lg text-white font-mono bg-[#18181b] rounded-lg px-4 py-2 border border-[#353535]/30">
                  {user.first_name ?? ""}
                </div>
              )}
            </div>
            <div>
              <div className="text-white/60 text-xs font-semibold mb-1">Last Name</div>
              {editingProfile ? (
                <input
                  type="text"
                  name="last_name"
                  value={profileForm?.last_name ?? ""}
                  onChange={handleProfileChange}
                  className="text-lg text-white font-mono bg-[#18181b] rounded-lg px-4 py-2 border border-[#353535]/30 w-full"
                />
              ) : (
                <div className="text-lg text-white font-mono bg-[#18181b] rounded-lg px-4 py-2 border border-[#353535]/30">
                  {user.last_name ?? ""}
                </div>
              )}
            </div>
          </div>
          <div>
            {user.verified === "no" && (
              <div className="mb-2 flex items-center gap-2">
                <span className="bg-red-600 text-white text-xs font-semibold rounded px-3 py-1">Unverified</span>
                <a href="#" className="text-xs text-[#e20074] underline hover:text-[#ff00a0] font-semibold">Verify Now</a>
              </div>
            )}
            <div className="text-white/60 text-xs font-semibold mb-1">Email</div>
            {editingProfile ? (
              <input
                type="email"
                name="email"
                value={profileForm?.email ?? ""}
                onChange={handleProfileChange}
                className="text-lg text-white font-mono bg-[#18181b] rounded-lg px-4 py-2 border border-[#353535]/30 w-full"
              />
            ) : (
              <div className="text-lg text-white font-mono bg-[#18181b] rounded-lg px-4 py-2 border border-[#353535]/30">
                {user.email ?? ""}
              </div>
            )}
          </div>
          <div className="flex justify-end gap-3 mt-6">
            {editingProfile ? (
              <>
                <button onClick={handleProfileCancel} className="px-5 py-2 rounded-lg bg-[#353535] text-white/80 font-semibold hover:bg-[#444] transition-all">Cancel</button>
                <button onClick={handleProfileSave} className="px-5 py-2 rounded-lg bg-gradient-to-r from-[#e20074] to-[#ff00a0] text-white font-bold hover:from-[#d1006a] hover:to-[#e6009c] transition-all">Save</button>
              </>
            ) : (
              <button onClick={handleProfileEdit} className="px-5 py-2 rounded-lg bg-gradient-to-r from-[#e20074] to-[#ff00a0] text-white font-bold hover:from-[#d1006a] hover:to-[#e6009c] transition-all">Edit</button>
            )}
          </div>
        </div>
      </div>

      {/* Password Card */}
      <div className="bg-[#23232b] rounded-2xl shadow-2xl p-8 border border-[#353535]/40">
        <div className="text-xl font-bold text-white mb-4 flex items-center gap-2">
          <Icon icon="mdi:lock-reset" className="text-[#e20074]" width="24" height="24" />
          Password
        </div>
        <form className="space-y-6 max-w-md">
          <div>
            <label className="text-white/60 text-xs font-semibold mb-1 block">Current Password</label>
            <input type="password" className="w-full rounded-lg bg-[#18181b] border border-[#353535]/30 px-4 py-2 text-white font-mono focus:outline-none min-h-[48px]" autoComplete="current-password" disabled />
          </div>
          <div>
            <label className="text-white/60 text-xs font-semibold mb-1 block">New Password</label>
            <input type="password" className="w-full rounded-lg bg-[#18181b] border border-[#353535]/30 px-4 py-2 text-white font-mono focus:outline-none min-h-[48px]" autoComplete="new-password" disabled />
          </div>
          <div>
            <label className="text-white/60 text-xs font-semibold mb-1 block">Confirm New Password</label>
            <input type="password" className="w-full rounded-lg bg-[#18181b] border border-[#353535]/30 px-4 py-2 text-white font-mono focus:outline-none min-h-[48px]" autoComplete="new-password" disabled />
          </div>
        </form>
      </div>

      {/* Address Info Card */}
      <div className="bg-[#23232b] rounded-2xl shadow-2xl p-8 border border-[#353535]/40">
        <div className="text-xl font-bold text-white mb-4 flex items-center gap-2">
          <Icon icon="mdi:home-map-marker" className="text-[#e20074]" width="24" height="24" />
          Address Information
        </div>
        <div className="space-y-6">
          <div>
            <div className="text-white/60 text-xs font-semibold mb-1">Address</div>
            <div className="text-lg text-white font-mono bg-[#18181b] rounded-lg px-4 py-2 border border-[#353535]/30 min-h-[48px] flex items-center">
              {user.address ?? ""}
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <div className="text-white/60 text-xs font-semibold mb-1">City</div>
              <div className="text-lg text-white font-mono bg-[#18181b] rounded-lg px-4 py-2 border border-[#353535]/30 min-h-[48px] flex items-center">
                {user.city ?? ""}
              </div>
            </div>
            <div>
              <div className="text-white/60 text-xs font-semibold mb-1">State / Province</div>
              <div className="text-lg text-white font-mono bg-[#18181b] rounded-lg px-4 py-2 border border-[#353535]/30 min-h-[48px] flex items-center">
                {user.state ?? ""}
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <div className="text-white/60 text-xs font-semibold mb-1">ZIP / Postal Code</div>
              <div className="text-lg text-white font-mono bg-[#18181b] rounded-lg px-4 py-2 border border-[#353535]/30 min-h-[48px] flex items-center">
                {user.zip ?? ""}
              </div>
            </div>
            <div>
              <div className="text-white/60 text-xs font-semibold mb-1">Country</div>
              <div className="text-lg text-white font-mono bg-[#18181b] rounded-lg px-4 py-2 border border-[#353535]/30 min-h-[48px] flex items-center">
                {user.country ?? ""}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 
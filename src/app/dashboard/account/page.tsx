"use client";
import { useEffect, useState, useRef } from "react";
import { Icon } from "@iconify/react";

export default function AccountPage() {
  // Try to get user data from localStorage/sessionStorage if available
  const [user, setUser] = useState<{
    first_name?: string;
    last_name?: string;
    email?: string;
    verified?: string;
    avatar?: string;
    twitch?: string;
    kick?: string;
    youtube?: string;
    rumble?: string;
    x?: string;
    noice?: string;
    trovo?: string;
    parti?: string;
    discord?: string;
  } | null>(null);

  const fileInputRef = useRef<HTMLInputElement>(null);
  const [editingProfile, setEditingProfile] = useState(false);
  const [profileForm, setProfileForm] = useState<any>(null);
  const [profileError, setProfileError] = useState<string | null>(null);
  const [editingPassword, setEditingPassword] = useState(false);
  const [passwordForm, setPasswordForm] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: ""
  });
  const [passwordError, setPasswordError] = useState<string | null>(null);
  const [passwordSuccess, setPasswordSuccess] = useState<string | null>(null);
  const [editingSocials, setEditingSocials] = useState(false);
  const [socialsForm, setSocialsForm] = useState<any>(null);
  const [socialsError, setSocialsError] = useState<string | null>(null);
  const [socialsSuccess, setSocialsSuccess] = useState<string | null>(null);
  const [integrations, setIntegrations] = useState({
    twitch: { connected: false, username: "" },
    kick: { connected: false, username: "" },
    youtube: { connected: false, username: "" },
    rumble: { connected: false, username: "" },
    x: { connected: false, username: "" },
  });

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

  useEffect(() => {
    if (user && !socialsForm) {
      setSocialsForm({
        twitch: user.twitch || "",
        kick: user.kick || "",
        youtube: user.youtube || "",
        rumble: user.rumble || "",
        x: user.x || "",
        noice: user.noice || "",
        trovo: user.trovo || "",
        parti: user.parti || "",
        discord: user.discord || "",
      });
    }
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
    const allowedFields = ["first_name", "last_name", "email"];
    const filteredProfileForm = Object.fromEntries(
      Object.entries(profileForm).filter(([key]) => allowedFields.includes(key))
    );
    // Detect if email changed
    const emailChanged = filteredProfileForm.email && filteredProfileForm.email !== user?.email;
    // Set verified to 'no' if email changed
    const updated = { ...user, ...filteredProfileForm, verified: emailChanged ? 'no' : user?.verified };
    setUser(updated); // Optimistic update
    setEditingProfile(false);
    (window as any).dashboardUser = updated;
    // Save to backend
    const res = await fetch("/api/account/profile", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(filteredProfileForm),
    });
    if (!res.ok) {
      setUser(user); // Revert
      setProfileError("Failed to save changes. Please try again.");
      setEditingProfile(true);
    }
  };

  const handlePasswordEdit = () => {
    setPasswordForm({
      currentPassword: "",
      newPassword: "",
      confirmPassword: ""
    });
    setEditingPassword(true);
    setPasswordError(null);
    setPasswordSuccess(null);
  };

  const handlePasswordCancel = () => {
    setPasswordForm({
      currentPassword: "",
      newPassword: "",
      confirmPassword: ""
    });
    setEditingPassword(false);
    setPasswordError(null);
    setPasswordSuccess(null);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPasswordForm(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handlePasswordSave = async () => {
    setPasswordError(null);
    setPasswordSuccess(null);

    // Validate passwords
    if (!passwordForm.currentPassword || !passwordForm.newPassword || !passwordForm.confirmPassword) {
      setPasswordError("All password fields are required.");
      return;
    }

    if (passwordForm.newPassword !== passwordForm.confirmPassword) {
      setPasswordError("New passwords do not match.");
      return;
    }

    if (passwordForm.newPassword.length < 8) {
      setPasswordError("New password must be at least 8 characters long.");
      return;
    }

    try {
      const res = await fetch("/api/account/password", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          currentPassword: passwordForm.currentPassword,
          newPassword: passwordForm.newPassword
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        setPasswordError(data.error || "Failed to update password.");
        return;
      }

      // Clear form and exit edit mode
      setPasswordForm({
        currentPassword: "",
        newPassword: "",
        confirmPassword: ""
      });
      setEditingPassword(false);
      setPasswordSuccess("Password updated successfully!");
    } catch (error) {
      setPasswordError("An error occurred while updating your password.");
    }
  };

  const handleSocialsEdit = () => {
    setSocialsForm({
      twitch: user?.twitch || "",
      kick: user?.kick || "",
      youtube: user?.youtube || "",
      rumble: user?.rumble || "",
      x: user?.x || "",
      noice: user?.noice || "",
      trovo: user?.trovo || "",
      parti: user?.parti || "",
      discord: user?.discord || "",
    });
    setEditingSocials(true);
    setSocialsError(null);
    setSocialsSuccess(null);
  };
  const handleSocialsCancel = () => {
    setSocialsForm({
      twitch: user?.twitch || "",
      kick: user?.kick || "",
      youtube: user?.youtube || "",
      rumble: user?.rumble || "",
      x: user?.x || "",
      noice: user?.noice || "",
      trovo: user?.trovo || "",
      parti: user?.parti || "",
      discord: user?.discord || "",
    });
    setEditingSocials(false);
    setSocialsError(null);
    setSocialsSuccess(null);
  };
  const handleSocialsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSocialsForm((prev: any) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  const handleSocialsSave = async () => {
    setSocialsError(null);
    setSocialsSuccess(null);
    // Only send non-empty fields
    const filteredSocialsForm = Object.fromEntries(
      Object.entries(socialsForm).filter(([_, value]) => typeof value === 'string' && value.trim() !== "")
    );
    // Save to backend
    const res = await fetch("/api/account/socials", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(filteredSocialsForm),
    });
    if (!res.ok) {
      setSocialsError("Failed to save socials. Please try again.");
      setEditingSocials(true);
      return;
    }
    setUser((prev) => prev ? { ...prev, ...filteredSocialsForm } : prev);
    setEditingSocials(false);
    setSocialsSuccess("Socials updated successfully!");
  };

  const handleConnect = (platform: string) => {
    // Placeholder for future integration logic
    alert(`Connect to ${platform} (integration coming soon)`);
  };

  if (!user) {
    return (
      <div className="flex justify-center items-center h-full">
        <span className="text-white/60 text-lg">Loading account info...</span>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto mt-10 space-y-10">
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
              {user.first_name ?? "User"}
            </div>
            <div className="text-white/70 text-sm">Account Overview</div>
          </div>
        </div>
        <div className="space-y-6">
          {profileError && (
            <div className="mb-4 rounded-lg bg-red-500/10 p-3 border border-red-500/20 text-red-400 text-sm">{profileError}</div>
          )}
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
          <div className="mt-4">
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
          <div>
            {user.verified === "no" && (
              <div className="mb-2 flex items-center gap-2">
                <span className="bg-red-600 text-white text-xs font-semibold rounded px-3 py-1">Unverified</span>
                <a href="#" className="text-xs text-[#e20074] underline hover:text-[#ff00a0] font-semibold">Verify Now</a>
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
        {passwordError && (
          <div className="mb-4 rounded-lg bg-red-500/10 p-3 border border-red-500/20 text-red-400 text-sm">{passwordError}</div>
        )}
        {passwordSuccess && (
          <div className="mb-4 rounded-lg bg-green-500/10 p-3 border border-green-500/20 text-green-400 text-sm">{passwordSuccess}</div>
        )}
        <form className="space-y-6 max-w-md">
          <div>
            <label className="text-white/60 text-xs font-semibold mb-1 block">Current Password</label>
            <input
              type="password"
              name="currentPassword"
              value={passwordForm.currentPassword}
              onChange={handlePasswordChange}
              className="w-full rounded-lg bg-[#18181b] border border-[#353535]/30 px-4 py-2 text-white font-mono focus:outline-none min-h-[48px]"
              autoComplete="current-password"
              disabled={!editingPassword}
            />
          </div>
          <div>
            <label className="text-white/60 text-xs font-semibold mb-1 block">New Password</label>
            <input
              type="password"
              name="newPassword"
              value={passwordForm.newPassword}
              onChange={handlePasswordChange}
              className="w-full rounded-lg bg-[#18181b] border border-[#353535]/30 px-4 py-2 text-white font-mono focus:outline-none min-h-[48px]"
              autoComplete="new-password"
              disabled={!editingPassword}
            />
          </div>
          <div>
            <label className="text-white/60 text-xs font-semibold mb-1 block">Confirm New Password</label>
            <input
              type="password"
              name="confirmPassword"
              value={passwordForm.confirmPassword}
              onChange={handlePasswordChange}
              className="w-full rounded-lg bg-[#18181b] border border-[#353535]/30 px-4 py-2 text-white font-mono focus:outline-none min-h-[48px]"
              autoComplete="new-password"
              disabled={!editingPassword}
            />
          </div>
          <div className="flex justify-end gap-3">
            {editingPassword ? (
              <>
                <button
                  type="button"
                  onClick={handlePasswordCancel}
                  className="px-5 py-2 rounded-lg bg-[#353535] text-white/80 font-semibold hover:bg-[#444] transition-all"
                >
                  Cancel
                </button>
                <button
                  type="button"
                  onClick={handlePasswordSave}
                  className="px-5 py-2 rounded-lg bg-gradient-to-r from-[#e20074] to-[#ff00a0] text-white font-bold hover:from-[#d1006a] hover:to-[#e6009c] transition-all"
                >
                  Save
                </button>
              </>
            ) : (
              <button
                type="button"
                onClick={handlePasswordEdit}
                className="px-5 py-2 rounded-lg bg-gradient-to-r from-[#e20074] to-[#ff00a0] text-white font-bold hover:from-[#d1006a] hover:to-[#e6009c] transition-all"
              >
                Change Password
              </button>
            )}
          </div>
        </form>
      </div>

      {/* Socials Card */}
      <div className="bg-[#23232b] rounded-2xl shadow-2xl p-8 border border-[#353535]/40 mt-10">
        <div className="text-xl font-bold text-white mb-4 flex items-center gap-2">
          <Icon icon="mdi:account-multiple" className="text-[#e20074]" width="24" height="24" />
          Socials
        </div>
        {socialsError && (
          <div className="mb-4 rounded-lg bg-red-500/10 p-3 border border-red-500/20 text-red-400 text-sm">{socialsError}</div>
        )}
        {socialsSuccess && (
          <div className="mb-4 rounded-lg bg-green-500/10 p-3 border border-green-500/20 text-green-400 text-sm">{socialsSuccess}</div>
        )}
        <form className="space-y-4">
          {[
            { name: "twitch", label: "Twitch", icon: "mdi:twitch" },
            { name: "kick", label: "Kick", icon: "simple-icons:kick" },
            { name: "youtube", label: "YouTube", icon: "mdi:youtube" },
            { name: "rumble", label: "Rumble", icon: "simple-icons:rumble" },
            { name: "x", label: "X (Twitter)", icon: "mdi:twitter" },
            { name: "noice", label: "Noice", icon: "mdi:account-voice" },
            { name: "trovo", label: "Trovo", icon: "mdi:link-variant" },
            { name: "parti", label: "Parti", icon: "mdi:party-popper" },
            { name: "discord", label: "Discord", icon: "mdi:discord" },
          ].map((social) => (
            <div key={social.name} className="flex items-center gap-3">
              <Icon icon={social.icon} width="24" height="24" className="text-[#e20074]" />
              <div className="flex-1">
                <label className="text-white/60 text-xs font-semibold mb-1 block">{social.label}</label>
                <input
                  type="text"
                  name={social.name}
                  value={socialsForm?.[social.name] ?? ""}
                  onChange={handleSocialsChange}
                  className="w-full rounded-lg bg-[#18181b] border border-[#353535]/30 px-4 py-2 text-white font-mono focus:outline-none min-h-[40px]"
                  disabled={!editingSocials}
                />
              </div>
            </div>
          ))}
          <div className="flex justify-end gap-3 mt-4">
            {editingSocials ? (
              <>
                <button type="button" onClick={handleSocialsCancel} className="px-5 py-2 rounded-lg bg-[#353535] text-white/80 font-semibold hover:bg-[#444] transition-all">Cancel</button>
                <button type="button" onClick={handleSocialsSave} className="px-5 py-2 rounded-lg bg-gradient-to-r from-[#e20074] to-[#ff00a0] text-white font-bold hover:from-[#d1006a] hover:to-[#e6009c] transition-all">Save</button>
              </>
            ) : (
              <button type="button" onClick={handleSocialsEdit} className="px-5 py-2 rounded-lg bg-gradient-to-r from-[#e20074] to-[#ff00a0] text-white font-bold hover:from-[#d1006a] hover:to-[#e6009c] transition-all">Edit</button>
            )}
          </div>
        </form>
      </div>

      {/* Integrations Card */}
      <div>
        <div className="bg-[#23232b] rounded-2xl shadow-2xl p-8 border border-[#353535]/40">
          <div className="text-xl font-bold text-white mb-6 flex items-center gap-2">
            <Icon icon="mdi:link-variant" className="text-[#e20074]" width="24" height="24" />
            Integrations
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {[
              { name: "twitch", label: "Twitch", icon: "mdi:twitch" },
              { name: "kick", label: "Kick", icon: "simple-icons:kick" },
              { name: "youtube", label: "YouTube", icon: "mdi:youtube" },
              { name: "rumble", label: "Rumble", icon: "simple-icons:rumble" },
              { name: "x", label: "X", icon: "mdi:twitter" },
            ].map((integration) => (
              <div key={integration.name} className="flex flex-col items-center justify-center gap-3 p-4">
                <Icon icon={integration.icon} width="48" height="48" className="mb-2" />
                <div className="font-semibold text-white text-lg mb-2">{integration.label}</div>
                {integrations[integration.name as keyof typeof integrations].connected ? (
                  <div className="text-green-400 font-mono text-sm">Connected as {integrations[integration.name as keyof typeof integrations].username}</div>
                ) : (
                  <button
                    type="button"
                    onClick={() => handleConnect(integration.label)}
                    className="px-5 py-2 rounded-lg bg-gradient-to-r from-[#e20074] to-[#ff00a0] text-white font-bold hover:from-[#d1006a] hover:to-[#e6009c] transition-all"
                  >
                    Connect
                  </button>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
} 
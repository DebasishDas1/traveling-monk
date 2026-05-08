export type SubscribeResponse = {
  success: boolean;
  error?: string;
};

export async function subscribeEmail(email: string): Promise<SubscribeResponse> {
  try {
    const res = await fetch("/api/subscribe", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email }),
    });

    let data: any = null;
    try {
      data = await res.json();
    } catch {}

    if (!res.ok) {
      return { success: false, error: data?.error || "Request failed" };
    }

    return { success: true };
  } catch (err) {
    return { success: false, error: "Network error" };
  }
}
import type { NextApiRequest, NextApiResponse } from "next";
import { getBlogPosts } from "../../app/db/blog";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const blogPosts = getBlogPosts();
    res.status(200).json(blogPosts);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch blog posts" });
  }
}

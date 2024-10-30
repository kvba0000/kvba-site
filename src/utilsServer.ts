"use server";

export const getPinnedProjects = async (limit: number = 5, user: string = "kvba0000") => {
    if(!process.env.GITHUB_TOKEN) {
        console.warn("GITHUB_TOKEN is not defined! No projects will show up on the website.")
        return []
    }

    const resp = await fetch("https://api.github.com/graphql", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${process.env.GITHUB_TOKEN}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        query: `{
          user(login: "${user}") {
            pinnedItems(first: ${limit}, types: REPOSITORY) {
              nodes {
                ... on Repository {
                  name
                }
              }
            }
          }
        }`
      }),
      next: {
        revalidate: 10800
      }
    })

    if(!resp.ok) return []

    const { data: { user: { pinnedItems: { nodes } } } } = await resp.json<{
      data: {
        user: {
          pinnedItems: {
            nodes: { name: string }[]
          }
        }
      }
    }>()

    return nodes.map(({ name }) => name)
}
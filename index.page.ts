export const layout = "base.ts"
export const title = "카타클리즘: 밝은 밤 변경 내역"
export const head = /*html*/`
    <link rel="stylesheet" href="/assets/list.css">
`
type Renderer = (content: string) => string

export const section = (render: Renderer) => (page: Lume.Page["data"]): string => /*html*/ `
    <li>
        <h2 id="${page.basename}">
            <a href="#${page.basename}">${page.basename}</a>
        </h2>
        ${render(page.content as string)}
    </li>`

export default ({ search }: Lume.Data, { md }: Lume.Helpers): string => {
	const pages = search.pages().filter((page) => page.page.src.ext === ".md")

	return /*html*/ `
        <ul>
            ${pages.map(section(md)).join("\n")}
        </ul>
    `
}

import { defineCollection, z } from 'astro:content';
import { glob, file } from 'astro/loaders';


const dogs = defineCollection({
  loader: file("src/data/pets.json", { parser: (text) => JSON.parse(text).dogs })
});
const cats = defineCollection({
  loader: file("src/data/pets.json", { parser: (text) => JSON.parse(text).cats })
});


const blog = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/data/blog" }),

});

const countries = defineCollection({
  loader: async () => {
    const response = await fetch("https://restcountries.com/v3.1/all");
    const data = await response.json();
    // 必须返回具有 id 属性的条目数组，或以 ID 作为键、条目作为值的对象
    return data.map((country) => ({
      id: country.cca3,
      ...country,
    }));
  },

});


const probes = defineCollection({
  // `loader` 可以接受多个模式的数组以及字符串模式"
  // 加载 space-probes 目录中的所有 Markdown 文件，以 "voyager-" 开头的文件除外
  loader: glob({ pattern: ['*.md', '!voyager-*'], base: 'src/data/space-probes' }),
  schema: z.object({
    name: z.string(),
    type: z.enum(['Space Probe', 'Mars Rover', 'Comet Lander']),
    launch_date: z.date(),
    status: z.enum(['Active', 'Inactive', 'Decommissioned']),
    destination: z.string(),
    operator: z.string(),
    notable_discoveries: z.array(z.string()),
  }),
});

export const collections = { blog, dogs, probes,cats };
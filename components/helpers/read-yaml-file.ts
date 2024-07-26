import fs from 'fs/promises';

const readYamlFile = async (fileName: string) => {
  try {
    const data = await fs.readFile(`./public/${fileName}`, 'utf-8');
    const yamlString = `\`\`\`yaml\n${data}\`\`\``;

    return yamlString;
  } catch (error: any) {
    throw new Error(`Error: something went wrong while reading ${fileName} file: ${error.message}`);
  }
};

export default readYamlFile;
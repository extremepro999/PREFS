# Libraries
import glob
import os
import frontmatter

getDirs = lambda dirname: [f.path for f in os.scandir(dirname) if f.is_dir()]

directories = [i.replace("./", "") for i in getDirs(".")]

def AddVersion(directories, extension="md"):
	for folder in directories:
		
		files = glob.glob(f"{folder}/*.{extension}")

		for filename in files:
			if "versions" in filename: continue
			
			file = frontmatter.load(filename)
			
			permlink = file.metadata["permalink"]
			permlink = permlink.split("/")
			permlink[0] = folder

			file["version"] = folder

			permlink = "/".join(permlink)
			
			file["permalink"] = permlink
			frontmatter.dump(file, filename)

def CreateVersionsFile(filename="versions", extension="md"):
	if os.path.exists(f"{filename}.{extension}"): os.remove(f"{filename}.{extension}")

	with open(f"{filename}.{extension}", "w+") as file:
		file.write("## Documentation versions\n\n")

		for version in directories:
			file.write(f"- [{version}](https://patitotective.github.io/PREFS/{version}/home)\n")

		### Add front matter
		fileMatter = frontmatter.load(f"{filename}.{extension}")
		fileMatter["layout"] = "page" 
		fileMatter["tittle"] = "Versions"
		fileMatter["permalink"] = "/versions/"
		fileMatter["nav_order"] = 4

		frontmatter.dump(fileMatter, f"{filename}.{extension}")

if __name__ == "__main__":
	CreateVersionsFile()
	AddVersion(directories)
	

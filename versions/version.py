# Libraries
import glob
import os
import frontmatter

getDirs = lambda dirname: [f.path for f in os.scandir(dirname) if f.is_dir()]

directories = getDirs(".")

def AddVersion(directories, extension="md"):
	for folder in directories:
		folder = folder.replace("./", "")
		
		files = glob.glob(f"{folder}/*.{extension}")

		for filename in files:
			if "versions" in filename: continue
			
			file = frontmatter.load(filename)
			
			permlink = file.metadata["permalink"]
			permlink = permlink.split("/")
			permlink[0] = folder
			permlink = "/".join(permlink)
			
			file["permalink"] = permlink 
			frontmatter.dump(file, filename)

if __name__ == "__main__":
	AddVersion(directories)

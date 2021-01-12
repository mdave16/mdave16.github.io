module SideProjects
class Generator < Jekyll::Generator
		def generate(site)
			side_projects = site.collections["side_projects"]
			side_projects.docs = site.config["side_projects"].map do |project|
				Jekyll::Document.new(project, {
					site: site,
					collection: side_projects,
					url: project
				})
			end
		end
	end
end
module Jekyll
  module Convertible
    def write(dest)
      path = destination(dest)
      FileUtils.mkdir_p(File.dirname(path))
      output.strip!

      newline_regexp = /^[\s\t]*(\r\n|\r|\n)/

      if File.extname(path).downcase.eql? '.html'
        # If the file is HTML, newlines within <pre> elements should not be
        #   collapsed.
        pre_regexp = /<\/?pre[^>]*>/i
        pre_list = output.scan(pre_regexp)
        blocks = output.split(pre_regexp)

        collapsed_blocks = []
        blocks.each_with_index do |block, i|
          collapsed_blocks << (i.odd? ? block : block.gsub(newline_regexp, ''))
          collapsed_blocks << pre_list[i] if pre_list.size > i
        end
        self.output = collapsed_blocks.join('')
      else
        self.output = output.gsub(newline_regexp, '')
      end

      File.open(path, 'w') { |f| f.write(output) }
    end
  end
end
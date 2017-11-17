#Sample file, need to be placed in the jenkins-custom folder with own settings and field def
require 'data-anonymization'

DataAnon::Utils::Logging.logger.level = Logger::INFO
begin
	database 'test_db' do
	  strategy DataAnon::Strategy::Whitelist
	  source_db :adapter => 'postgresql', :host => '##DB.LIVE.POSTGRES.URL##', :port => '##DB.LIVE.POSTGRES.PORT##', :pool => 5, :username => '##DB.LIVE.POSTGRES.USERNAME##', :password => '##DB.LIVE.POSTGRES.PASSWORD##', :database => 'postalcodes'
	  destination_db :adapter => 'postgresql', :host => '##DB.POSTGRES.URL##', :port => '##DB.POSTGRES.PORT##', :pool => 5, :username => '##DB.POSTGRES.USERNAME##', :password => '##DB.POSTGRES.PASSWORD##', :database => 'postalcodes##DB.NAME.SUFFIX##'
	  table 'postalcodes' do
	    whitelist 'postalcode_id'
			anonymize('city').using FieldStrategy::RandomCity.region_UK
			anonymize('address').using FieldStrategy::RandomAddress.region_UK
			anonymize('code').using FieldStrategy::RandomZipcode.region_UK
	  end
	end
	rescue PG::ERROR => e	  
	  puts e.message
	  return false
end	

	
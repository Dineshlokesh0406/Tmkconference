import { Crown, Star, Users, Mic } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import shreedharImg from '@/assets/shreedhar.png';
import dileepImg from '@/assets/dileep.png';
import maheshImg from '@/assets/mahesh.png';
import rajanImg from '@/assets/rajan.png';
import deepakImg from '@/assets/deepak.jpeg';
import dileepAdImg from '@/assets/dileepad.jpg';
import padmavathyImg from '@/assets/padmavathy.jpg';
import paramashivaiahImg from '@/assets/paramashivaiah.jpg';
import premasudhaImg from '@/assets/premasudha.jpg';
import sunilsaumyaImg from '@/assets/sunilsaumya.jpeg';
import surendiranImg from '@/assets/surendrian.jpeg';
import mamathaImg from '@/assets/Mamatha.jpg';
import nijalingappaImg from '@/assets/Nijalingappa .jpg';
import sowjanyaImg from '@/assets/Sowjanya.jpg';
import yogeshwarappaImg from '@/assets/Yogeshwarappa.jpg';
import lingadevaruImg from '@/assets/lingadevaru.jpg';
import shivakumaraiahImg from '@/assets/Dr-Shivakumaraiah.jpg';
import nanjundappaImg from '@/assets/Nanjundappa.jpg';
import mahadevaprasannaImg from '@/assets/mahadevaprsanna.jpg';
import jaisankarImg from '@/assets/Jaisankarn.webp';
import sunithanrImg from '@/assets/Sunithanr.jpeg';

const Committee = () => {
  const keynoteData = [
    {
      name: "Dr. Shreedhara K S",
      title: "Professor of CSE",
      institution: "University BDT College of Engineering, Davanagere, Karnataka",
      image: shreedharImg
    },
    {
      name: "Dr. Dilip Kumar S M",
      title: "Professor in Computer Science Engineering",
      institution: "University Visvesvaraya College of Engineering, Bangalore",
      image: dileepImg
    },
    {
      name: "Dr. Mahesha BR Pandit",
      title: "Chief Technology Officer",
      institution: "Canarys Automations Limited, Bangalore",
      image: maheshImg
    },
    {
      name: "Dr. M A Rajan",
      title: "Principal Scientist, Applied Cryptography Group",
      institution: "Tata Consultancy Services, Bangalore",
      image: rajanImg
    }
  ];

  const advisoryCommittee = [
    {
      name: "Dr. Dileep A.D.",
      title: "Professor, Dept of Computer Science and Engineering & Dean Administration",
      institution: "Indian Institute of Technology, Dharwad",
      image: dileepAdImg
    },
    {
      name: "Dr. R. Padmavathy",
      title: "Professor & Former Head, Dept of Computer Science and Engineering",
      institution: "National Institute of Technology, Warangal",
      image: padmavathyImg
    },
    {
      name: "Dr. Deepak K.T.",
      title: "Associate Dean - Research and Development [R&D]",
      institution: "Indian Institute of Information Technology, Dharwad",
      image: deepakImg
    },
    {
      name: "Dr. Sunil Saumya",
      title: "Associate Dean (Academics)",
      institution: "Indian Institute of Information Technology, Dharwad",
      image: sunilsaumyaImg
    },
    {
      name: "Dr. Jaisankar N.",
      title: "Professor, Higher Academic Grade, School of Computer Science and Engineering, Dept of Software Systems",
      institution: "VIT, Vellore",
      image: jaisankarImg
    },
    {
      name: "Dr. B. Surendiran",
      title: "Asso. Professor, Dept of CSE",
      institution: "NIT Puducherry, Thiruvettakudy, Karaikal, Puducherry",
      image: surendiranImg
    },
    {
      name: "Prof. P. Paramashivaiah",
      title: "Professor, Dept of Commerce and Management",
      institution: "Tumkur University",
      image: paramashivaiahImg
    },
    {
      name: "Dr. Premasudha B.G.",
      title: "Professor and Head, Dept of MCA",
      institution: "SIT, Tumakuru",
      image: premasudhaImg
    },
    {
      name: "Dr. Sunitha N.R.",
      title: "Professor and Head, Dept of Computer Science and Engineering",
      institution: "SIT, Tumakuru",
      image: sunithanrImg
    }
  ];

  const organizingCommittee = [
    {
      name: "Dr. H M Dakshina Murthy",
      title: "Principal",
      institution: "Sree Siddaganga College of Arts, Science and Commerce for Women, Tumakuru"
    },
    {
      name: "Dr. H S Jayanna",
      title: "Dean (Academic)",
      institution: "SIT, Tumakuru"
    },
    {
      name: "Dr. R Aparna",
      title: "Professor and Head, Dept of Information Science and Engineering",
      institution: "SIT, Tumakuru"
    },
    {
      name: "Dr. Kusuma Kumari B M",
      title: "Coordinator, Department of PG Studies in Computer Science",
      institution: "Tumkur University, Tumakuru"
    },
    {
      name: "Prof. H G Sarvamangala",
      title: "Coordinator, IQAC",
      institution: "Sree Siddaganga College of Arts, Science and Commerce, Tumakuru"
    },
    {
      name: "Dr. Vijay Kumar H S",
      title: "Assistant Professor, Dept of MCA",
      institution: "SIT, Tumakuru"
    },
    {
      name: "Dr. Prashanth G K",
      title: "Assistant Professor, Dept of MCA",
      institution: "SIT, Tumakuru"
    },
    {
      name: "Mahesha S",
      title: "Professor and Head, Dept of Computer Science",
      institution: "SSCASCW, Tumakuru"
    },
    {
      name: "K S Lingadevarappa",
      title: "Professor and Head, Dept of Computer Science",
      institution: "SSCASC, Tumakuru"
    },
    {
      name: "Prof. Shylesha B S",
      title: "Professor and Head, Dept of Chemistry",
      institution: "SSCASC, Tumakuru"
    },
    {
      name: "Dr. Padmaja Y M",
      title: "Professor and Head, Dept of Kannada",
      institution: "SSCASC, Tumakuru"
    },
    {
      name: "Dr. Revanasiddappa",
      title: "Professor and Head, Dept of Physics",
      institution: "SSCASC, Tumakuru"
    },
    {
      name: "Prof. Hanumantharayappa",
      title: "Professor and Head, Dept of Mathematics",
      institution: "SSCASC, Tumakuru"
    },
    {
      name: "Dr. Chandrashekaraiah",
      title: "Professor and Head, Dept of History",
      institution: "SSCASC, Tumakuru"
    },
    {
      name: "Capt. RamalingaReddy S",
      title: "NCC Officer",
      institution: "SSCASC, Tumakuru"
    },
    {
      name: "Prof. Rathnamma Y S",
      title: "Professor and Head, Dept of PG Studies in Commerce",
      institution: "SSCASC, Tumakuru"
    },
    {
      name: "Prof. Uday Kumar",
      title: "Director, Dept of Physical Education",
      institution: "SSCASC, Tumakuru"
    },
    {
      name: "Prof. Sowmya L",
      title: "Professor and Head, Dept of Bio technology",
      institution: "SSCASC, Tumakuru"
    },
    {
      name: "Prof. Navya S Murthy",
      title: "Professor and Head, Department of Commerce",
      institution: "SSCASC, Tumakuru"
    },
    {
      name: "Prof. Yashaswini",
      title: "Professor and Head, Department of Business Administration",
      institution: "SSCASC, Tumakuru"
    },
    {
      name: "Lt. Shruthi P",
      title: "NCC Officer",
      institution: "SSCASC, Tumakuru"
    },
    {
      name: "Sri Mallesh Babu",
      title: "Assistant Professor, Department of Computer Science",
      institution: "SSCASCW, Tumakuru"
    }
  ];

  const conferenceOrganizers = [
    {
      name: "Dr. Kusuma Kumari B M",
      title: "Coordinator, Dept PG studies in Computer Science",
      institution: "Tumkur University, Tumakuru",
      image: mamathaImg
    },
    {
      name: "K S Lingadevarappa",
      title: "HOD, Dept. of Computer Science",
      institution: "SSCASC, Tumakuru",
      image: lingadevaruImg
    },
    {
      name: "Prof. Sowmya L",
      title: "HOD, Dept. of Bio technology",
      institution: "SSCASC, Tumakuru",
      image: sowjanyaImg
    }
  ];

  return (
    <section id="committee" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Committee & Leadership
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Distinguished leaders and experts guiding the conference towards excellence
          </p>
        </div>

        {/* Leadership Hierarchy */}
        <div className="mb-16 space-y-8">
          {/* Chief Patron */}
          <Card className="card-conference">
            <CardHeader>
              <CardTitle className="flex items-center justify-center space-x-3 text-2xl text-primary">
                <Crown className="text-accent" size={28} />
                <span>Chief Patron</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <h3 className="text-xl font-bold text-primary mb-2">Sree Sree Siddalinga Swamiji</h3>
              <p className="text-muted-foreground">President, Sree Siddaganga Education Society, Siddaganga Math, Tumakuru</p>
            </CardContent>
          </Card>

          {/* Patrons */}
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="card-conference">
              <CardHeader>
                <CardTitle className="flex items-center justify-center space-x-2 text-lg text-secondary">
                  <Star className="text-secondary" size={20} />
                  <span>Patron</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <div className="flex flex-col items-center mb-2">
                  <div className="w-14 h-14 overflow-hidden rounded-full border-2 border-secondary/30 mb-2">
                    <img
                      src={nanjundappaImg}
                      alt="Sri T K Nanjundappa"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h4 className="font-bold text-foreground mb-1">Sri T K Nanjundappa</h4>
                  <p className="text-sm text-muted-foreground">Hon. Secretary, Sree Siddaganga Education Society, Sree Siddaganga Math, Tumakuru</p>
                </div>
              </CardContent>
            </Card>

            <Card className="card-conference">
              <CardHeader>
                <CardTitle className="flex items-center justify-center space-x-2 text-lg text-secondary">
                  <Star className="text-secondary" size={20} />
                  <span>Patron</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <div className="flex flex-col items-center mb-2">
                  <div className="w-14 h-14 overflow-hidden rounded-full border-2 border-secondary/30 mb-2">
                    <img
                      src={shivakumaraiahImg}
                      alt="Dr. Shivakumaraiah"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h4 className="font-bold text-foreground mb-1">Dr. Shivakumaraiah</h4>
                  <p className="text-sm text-muted-foreground">Joint Secretary, Sree Siddaganga Education Society, Sree Siddaganga Math, Tumakuru</p>
                </div>
              </CardContent>
            </Card>

            <Card className="card-conference">
              <CardHeader>
                <CardTitle className="flex items-center justify-center space-x-2 text-lg text-secondary">
                  <Star className="text-secondary" size={20} />
                  <span>Patron</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <div className="flex flex-col items-center mb-2">
                  <div className="w-14 h-14 overflow-hidden rounded-full border-2 border-secondary/30 mb-2">
                    <img
                      src={yogeshwarappaImg}
                      alt="Dr. D N Yogeeshwarappa"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h4 className="font-bold text-foreground mb-1">Dr. D N Yogeeshwarappa</h4>
                  <p className="text-sm text-muted-foreground">Coordinator for Degree Colleges, Sree Siddaganga Education Society, Sree Siddaganga Math, Tumakuru</p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Chairman and General Chair */}
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="card-conference">
              <CardHeader>
                <CardTitle className="flex items-center justify-center space-x-3 text-xl text-accent">
                  <Users className="text-accent" size={24} />
                  <span>Chairman</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <div className="flex flex-col items-center mb-4">
                  <div className="w-16 h-16 overflow-hidden rounded-full border-2 border-accent/30 mb-3">
                    <img
                      src={nijalingappaImg}
                      alt="Dr. T B Nijalingappa"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-lg font-bold text-primary mb-2">Dr. T B Nijalingappa</h3>
                  <p className="text-muted-foreground">Principal, Sree Siddaganga College of Arts, Science and Commerce, Tumakuru</p>
                </div>
              </CardContent>
            </Card>

            <Card className="card-conference">
              <CardHeader>
                <CardTitle className="flex items-center justify-center space-x-3 text-xl text-conference-teal">
                  <Users className="text-conference-teal" size={24} />
                  <span>General Chair</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <div className="flex flex-col items-center mb-4">
                  <div className="w-16 h-16 overflow-hidden rounded-full border-2 border-teal-300 mb-3">
                    <img
                      src={mahadevaprasannaImg}
                      alt="Dr. S.R. Mahadeva Prasanna"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-lg font-bold text-primary mb-2">Dr. S.R. Mahadeva Prasanna</h3>
                  <p className="text-muted-foreground">Director, IIIT, Dharwad</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Keynote Speakers */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-primary mb-4 flex items-center justify-center space-x-3">
              <Mic className="text-accent" size={32} />
              <span>Keynote Speakers</span>
            </h3>
            <p className="text-lg text-muted-foreground">Distinguished experts sharing insights on cutting-edge AI and ML technologies</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {keynoteData.map((speaker, index) => (
              <Card key={index} className="card-conference text-center">
                <CardContent className="p-6">
                  <div className="w-24 h-24 mx-auto mb-4 overflow-hidden rounded-full border-2 border-primary/20">
                    <img
                      src={speaker.image}
                      alt={speaker.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h4 className="font-bold text-lg text-primary mb-2">{speaker.name}</h4>
                  <p className="text-sm font-medium text-secondary mb-2">{speaker.title}</p>
                  <p className="text-xs text-muted-foreground leading-relaxed">{speaker.institution}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Advisory Committee */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-primary mb-4">Advisory Committee</h3>
            <p className="text-lg text-muted-foreground">Esteemed academicians and researchers providing strategic guidance</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {advisoryCommittee.map((member, index) => (
              <Card key={index} className="card-conference">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    {member.image ? (
                      <div className="w-16 h-16 overflow-hidden rounded-full border-2 border-primary/20 flex-shrink-0">
                        <img
                          src={member.image}
                          alt={member.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    ) : (
                      <div className="w-12 h-12 bg-gradient-to-br from-accent/20 to-primary/20 rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-primary font-bold text-lg">{index + 1}</span>
                      </div>
                    )}
                    <div className="flex-1">
                      <h4 className="font-bold text-foreground mb-1">{member.name}</h4>
                      <p className="text-sm font-medium text-secondary mb-2">{member.title}</p>
                      <p className="text-xs text-muted-foreground leading-relaxed">{member.institution}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Organizing Committee */}
        <div>
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-primary mb-4">Organizing Committee</h3>
            <p className="text-lg text-muted-foreground">Dedicated team members ensuring seamless conference execution</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {organizingCommittee.map((member, index) => (
              <Card key={index} className="card-conference">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-200 to-pink-200 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-purple-700 font-bold text-lg">{index + 1}</span>
                    </div>
                    <div className="flex-1">
                      <h4 className="font-bold text-foreground mb-1">{member.name}</h4>
                      <p className="text-sm font-medium text-purple-600 mb-2">{member.title}</p>
                      <p className="text-xs text-muted-foreground leading-relaxed">{member.institution}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Organized by Section */}
          <div className="mt-12 text-center">
            <Card className="card-conference max-w-2xl mx-auto">
              <CardContent className="p-8">
                <h4 className="text-xl font-bold text-primary mb-4">Organized by</h4>
                <div className="space-y-2">
                  <p className="text-lg font-semibold text-secondary">Department of Bachelor of Computer Applications</p>
                  <p className="text-muted-foreground">Sree Siddaganga College of Arts, Science and Commerce</p>
                  <p className="text-muted-foreground">Tumakuru</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Committee;
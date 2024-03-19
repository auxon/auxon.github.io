# /teamspace/studios/this_studio/auxon.github.io/boost_1_84_0
export BOOST_ROOT=/teamspace/studios/this_studio/auxon.github.io/boost_1_84_0 
export BOOST_LIBRARYDIR=/teamspace/studios/this_studio/auxon.github.io/boost_1_84_0/libs
./configure --with-boost=/teamspace/studios/this_studio/auxon.github.io/boost_1_84_0 --with-boost-libdir=/teamspace/studios/this_studio/auxon.github.io/boost_1_84_0/libs
cd /teamspace/studios/this_studio/auxon.github.io/boost_1_84_0
./bootstrap.sh
./b2 --with-libraries=system